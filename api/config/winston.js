// DEPENDENCIES
const winston = require('winston')
require('winston-daily-rotate-file')

// LOG OPTIONS
const QueryLogger = new (winston.transports.DailyRotateFile)({
  level: 'debug',
  filename: './logs/%DATE%_Queries.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: false
})

// CREATING THE LOGGER
const logger = winston.createLogger({
  transports: [
    QueryLogger
  ],
  exitOnError: false
})

// STREAM PROPERTY FOR LOGGING
logger.stream = {
  write: (message) => {
    logger.debug(message)
  }
}

// EXPORTING THE LOGGER TO THE APP
module.exports = logger
