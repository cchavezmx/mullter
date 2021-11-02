const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
const path = require('path')
const multerGoogleStorage = require('multer-google-storage')

// const storage = multer.diskStorage({
//     destination: path.join(__dirname, '../../public/uploads'),
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-')        
//         cb(null, uuidv4() + path.extname(fileName))
//     }
// })

const googleStorage = new multerGoogleStorage.storageEngine({
    autoRetry: true,
    keyFilename: process.env.GCS_KEYFILE,
    projectId: process.env.GCLOUD_PROJECT,
    bucket: process.env.GCS_BUCKET,    
    filename: (req, filename, cb) => {   
        console.log(filename)
        const folder = 'dev'
        cb(null, `${folder}/${Date.now()}-${uuidv4()}`)
    }    
})

const imageStorage = multer({
  storage: googleStorage,
  fileFilter: (req, file,) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
        return cb(null, true);
    }
    cb("Error: File upload only supports the following filetypes - " + filetypes);
  }
})

module.exports = {
    imageStorage,
    googleStorage
}