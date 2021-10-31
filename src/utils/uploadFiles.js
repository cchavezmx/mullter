const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
const path = require('path')
const multerGoogleStorage = require('multer-google-storage')


const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/uploads'),
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-')
        cb(null, uuidv4() + path.extname(fileName))
    }
})

const googleStorage = new multerGoogleStorage.storageEngine({
    projectId: 'firm-modem-312120',
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    bucket: process.env.BUCKET,
    filename: (req, file, cb) => {   

        console.log(req)

        const fileName = file.originalname.toLowerCase().split(' ').join('-')
        cb(null, uuidv4() + path.extname(fileName))
    }    
})

const imageStorage = multer({
  storage: googleStorage  
})

module.exports = {
    imageStorage,
    googleStorage
}