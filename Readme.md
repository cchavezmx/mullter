## Multer and Multer Google Function

Video para multer: 
[Multer Fazt Tutorial](https://www.youtube.com/watch?v=AbJ-y2vZgBs&t=343s)

````javascript
// middleware

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads'),
  filename: ( req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname))
    }
})

router.use(multer({
    storage,   
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the following filetypes - " + filetypes);
    }
}).single('image'))

router.post('/local/upload', (req, res) => {
  console.log(req.file)  
  res.send('upload')
})

````