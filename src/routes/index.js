const { Router } = require('express')
const router = Router()
const { imageStorage } = require('../utils/uploadFiles')
const Controllers = require('../controllers')
// rutas
router.post('/api/v1/upload', [imageStorage.single('image')], Controllers.uploadPhoto)



module.exports = router