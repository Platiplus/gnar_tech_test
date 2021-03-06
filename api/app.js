// DEPENDENCIES
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const Database = require('./api/database/database')

// CONTROLLERS
const uploadRoutes = require('./api/routes/uploadRoutes')

// DATABASE
const db = new Database()
db.connect()

// MIDDLEWARES
app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// ROUTES
app.use('/uploads', uploadRoutes)

// ERROR 404 HANDLING
app.use((request, response, next) => {
  return response.status(404).json({ error: true, message: 'Route not found' })
})

// APP EXPORTING
module.exports = app
