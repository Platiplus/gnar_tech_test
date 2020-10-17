// DEPENDENCIES
const path = require('path')
const logger = require('./winston')

module.exports = (environment = 'production') => {
  switch (environment) {
    case 'development':
      require('dotenv').config({ path: path.resolve(process.cwd(), '.dev.env') })
      break
    case 'qas':
      require('dotenv').config({ path: path.resolve(process.cwd(), '.qas.env') })
      break
    case 'production':
      require('dotenv').config()
      break
  }

  return {
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
}
