const { Sequelize } = require('sequelize')
const dbConfig = require('../../config/database')

const Upload = require('../models/Upload')
const UploadInfo = require('../models/UploadInfo')

class Database {
  connect (environment = 'production') {
    // CONNECTION
    const connection = new Sequelize(dbConfig(environment))

    // MODEL INITIALIZATION
    Upload.init(connection)
    UploadInfo.init(connection)

    // MODEL ASSOCIATION
    Upload.associate(connection.models)
    UploadInfo.associate(connection.models)

    return connection
  }
}

module.exports = Database
