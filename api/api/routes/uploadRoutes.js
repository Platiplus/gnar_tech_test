const express = require('express')
const router = express.Router()
const controller = require('../controllers/uploadController')

router.get('/', controller.getAllUploadedInfo)
router.post('/', controller.uploadFile)
router.get('/:uploadId', controller.getOneUploadedFile)

module.exports = router
