const db = require('../data/dbConfig')
const request = require('supertest')
const server = require('./server')

test('environment is testing', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

// beforeAll(async () => {
//   await db.migrate.rollback()
//   await db.migrate.latest()
// })

// beforeEach(async () => {
//   await db.seed.run()
// })


// describe('getAll', () => {
//   test('resolves all users in the table', async () => {
//     const result = await User.getAll()
//     expect(result).toHaveLength(2)
//   })
// })
