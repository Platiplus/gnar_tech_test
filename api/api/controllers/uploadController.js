const Upload = require('../models/Upload')

// UPLOAD A NEW FILE TO THE SERVER
const uploadFile = async (request, response) => {

}

// GET INFO ABOUT ALL THE UPLOADS
const getAllUploadedInfo = async (request, response) => {

}

// GET THE CONTENTS OF ONE FILE THAT HAS BEEN UPLOADED
const getOneUploadedFile = async (request, response) => {
  const uploadId = request.params.uploadId

  const upload = await Upload.findByPk(uploadId, {
    include: {
      association: 'upload_info'
    }
  })

  return response.status(200).json({ error: false, data: upload })
}

module.exports = {
  uploadFile,
  getAllUploadedInfo,
  getOneUploadedFile
}
