/* eslint-env mocha */
// UTILS AND MODELS
const path = require('path')
const { Op } = require('sequelize')
const Database = require('../api/database/database')
const Upload = require('../api/models/Upload')

// DEV DEPENDENCIES
const chai = require('chai')
const expect = chai.expect
const dirtyChai = require('dirty-chai')
const chaiHttp = require('chai-http')
const server = require('../app')
let uploadId

// MIDDLEWARES
chai.use(chaiHttp)
chai.use(dirtyChai)

// UPLOAD RELATED TESTS
describe('Upload', () => {
  before(async () => {
    const db = new Database()
    db.connect()
    Upload.destroy({
      where: {
        name: {
          [Op.ne]: ''
        }
      }
    })
  })

  describe('/POST /uploads/', () => {
    it('it should upload a file with csv data', (done) => {
      chai.request(server)
        .post('/uploads/')
        .field('name', 'FileName')
        .attach('file', path.resolve(__dirname, 'mocks', 'shifts.csv'))
        .end(async (err, res) => {
          uploadId = res.body.data.upload.dataValues.id
          expect(err).to.be.null()
          expect(res).to.have.status(200)
          expect(res.body.data).to.have.property('upload')
          expect(res.body.data).to.have.property('upload_info')
          expect(res.body.data.upload_info).to.be.an('array')
          done()
        })
    })
  })

  describe('/GET /uploads/', () => {
    it('it should get all the uploads (ids and names)', (done) => {
      chai.request(server)
        .get('/uploads/')
        .end(async (err, res) => {
          expect(err).to.be.null()
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body.data).to.be.an('array')
          done()
        })
    })
  })

  describe('/GET /uploads/:uploadId', () => {
    it('it should find an uploaded file with its data', (done) => {
      chai.request(server)
        .get(`/uploads/${uploadId}`)
        .end((err, res) => {
          expect(err).to.be.null()
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body.data).to.be.an('object')
          done()
        })
    })
  })

  describe('/GET /uploads/:uploadId', () => {
    it('it should fail to find a file that does not exists', (done) => {
      chai.request(server)
        .get('/uploads/1a09d9f2-26a6-4301-8c16-d8ed1b3f447c')
        .end((err, res) => {
          expect(err).to.be.null()
          expect(res).to.have.status(404)
          expect(res.body).to.be.an('object')
          expect(res.body.data).to.be.a('string')
          done()
        })
    })
  })
})
