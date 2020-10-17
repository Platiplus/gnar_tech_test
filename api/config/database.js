// DEPENDENCIES
const logger = require('./winston')

require('dotenv').config()

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrationStorageTableName: 'migrations',
  dialectOptions: {
    ssl: true
  },
  define: {
    timestamps: false,
    underscored: true
  },
  logging: (msg) => logger.debug(msg)
}
