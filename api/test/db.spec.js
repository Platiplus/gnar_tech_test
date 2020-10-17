/* eslint-env mocha */
// UTILS AND MODELS
const Database = require('../api/database/database')

// DEV DEPENDENCIES
const chai = require('chai')
const expect = chai.expect
const dirtyChai = require('dirty-chai')
const chaiHttp = require('chai-http')

// MIDDLEWARES
chai.use(chaiHttp)
chai.use(dirtyChai)

describe('Database', () => {
  describe('DB Instance', () => {
    it('it should be an object (Class)', (done) => {
      const db = new Database()
      expect(db).to.be.a('object')
      done()
    })
  })
  describe('DB Connection', () => {
    it('it should connect successfully to the provided database', (done) => {
      const db = new Database()
      const connection = db.connect('development')
      expect(connection).to.be.an('object')
      expect(connection.options.host).to.be.equal(process.env.DB_HOST)
      expect(connection.modelManager.models.length).to.be.greaterThan(0)
      done()
    })
    it('it should connect to the development database if no environment is provided', (done) => {
      const db = new Database()
      const connection = db.connect()
      expect(connection).to.be.an('object')
      expect(connection.options.host).to.be.equal(process.env.DB_HOST)
      expect(connection.modelManager.models.length).to.be.greaterThan(0)
      done()
    })
  })
})
