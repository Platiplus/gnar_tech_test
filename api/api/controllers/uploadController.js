const csv = require('fast-csv')
const fs = require('fs')
const constants = require('../../config/csvConstants')
const Upload = require('../models/Upload')
const UploadInfo = require('../models/UploadInfo')

// UPLOAD A NEW FILE TO THE SERVER
const uploadFile = async (request, response) => {
  try {
    const upload = await Upload.create({ name: request.body.name })
    const uploadInfos = []

    csv.parseFile(request.file.path, { headers: true })
      .on('data', (row) => {
        const uploadInfo = {
          id_upload: upload.id,
          yard_code: row[constants.YARD_CODE],
          employee_code: parseInt(row[constants.EMPLOYEE_CODE]),
          clock_in: new Date(row[constants.CLOCK_IN]),
          clock_out: new Date(row[constants.CLOCK_OUT])
        }
        uploadInfos.push(uploadInfo)
      })
      .on('end', async () => {
        const uploads = await UploadInfo.bulkCreate(uploadInfos)
        fs.unlinkSync(request.file.path)

        return response.status(200).json({ error: false, data: { upload: { ...upload }, upload_info: uploads } })
      })
  } catch (error) {
    return response.status(500).json({ error: true, data: error.message })
  }
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
        association: 'upload_infos'
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
