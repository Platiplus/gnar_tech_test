const express = require('express')
const router = express.Router()
const multer = require('multer')
const uploadPath = multer({ dest: 'tmp/csv/' })
const controller = require('../controllers/uploadController')

router.get('/', controller.getAllUploadedInfo)
router.post('/', uploadPath.single('file'), controller.uploadFile)
router.get('/:uploadId', controller.getOneUploadedFile)

module.exports = router
