const { Sequelize } = require('sequelize')
const dbConfig = require('../../config/database')

const Upload = require('../models/Upload')
const UploadInfo = require('../models/UploadInfo')

const connection = new Sequelize(dbConfig)

// INITIALIZATION
Upload.init(connection)
UploadInfo.init(connection)

// ASSOCIATION
Upload.associate(connection.models)
UploadInfo.associate(connection.models)

module.exports = connection
