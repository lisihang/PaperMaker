const expect = require('chai').expect
const request = require('supertest')
const app = require('../../app')
const db = require('../../db/models')

describe('routes/query.js', function () {  
  describe('GET /q', function () {
    before(async function () {
      await db.University.create({
        name: 'TestUniversity1',
        emailSuffix: '@tu1.edu.cn',
        emailServiceURL: 'mail.@tu1.edu.cn',
        nextChatTag: 1,
        allCourseCount: 0,
        scoredCourseCount: 0
      })
      await db.University.create({
        name: 'TestUniversity2',
        emailSuffix: '@tu2.edu.cn',
        emailServiceURL: 'mail.@tu2.edu.cn',
        nextChatTag: 1,
        allCourseCount: 0,
        scoredCourseCount: 0
      })
      await db.Course.create({
        '课程中文名': 'thisIsAChineseCourseName',
        universityId: 1
      })
    })
    after(async function () {
      await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
      await db.Course.destroy({
        truncate: true,
        force: true
      })
      await db.University.destroy({
        truncate: true,
        force: true
      })
      await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
    })
    it('should response with status code 400 when missing params #1', function (done) {
      request(app)
        .get('/q')
        .query({})
        .expect(400, done)
    })
    it('should response with status code 400 when missing params #2', function (done) {
      request(app)
        .get('/q')
        .query({ universityId: 1 })
        .expect(400, done)
    })
    it('should response with status code 400 when missing params #3', function (done) {
      request(app)
        .get('/q')
        .query({ q: 'earthquake' })
        .expect(400, done)
    })
    it('should response with status code 200 when params is valid', function (done) {
      request(app)
        .get('/q')
        .query({ universityId: 1, q: 'earthquake' })
        .expect(200, done)
    })
    it('should work', function (done) {
      request(app)
        .get('/q')
        .query({ universityId: 1, q: 'thisIsAChineseCourseName' })
        .expect(200)
        .then(res => {
          expect(res.body.payload.courses[0]['name']).to.equal('thisIsAChineseCourseName')
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})