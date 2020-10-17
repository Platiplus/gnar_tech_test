const Upload = require('../models/Upload')

// UPLOAD A NEW FILE TO THE SERVER
const uploadFile = async (request, response) => {

}

// GET INFO ABOUT ALL THE UPLOADS
const getAllUploadedInfo = async (request, response) => {
  try {
    const uploads = await Upload.findAll()

    return response.status(200).json({ error: false, data: uploads })
  } catch (error) {
    return response.status(500).json({ error: true, data: error.message })
  }
}

// GET THE CONTENTS OF ONE FILE THAT HAS BEEN UPLOADED
const getOneUploadedFile = async (request, response) => {
  try {
    const uploadId = request.params.uploadId

    const upload = await Upload.findByPk(uploadId, {
      include: {
        association: 'upload_info'
      }
    })

    if (upload == null) {
      return response.status(404).json({ error: true, data: `There is no file uploaded with id ${uploadId}` })
    }

    return response.status(200).json({ error: false, data: upload })
  } catch (error) {
    return response.status(500).json({ error: true, data: error.message })
  }
}

module.exports = {
  uploadFile,
  getAllUploadedInfo,
  getOneUploadedFile
}
