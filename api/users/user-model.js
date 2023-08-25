const db = require('../../data/dbConfig');

function getAll() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter).first()
}

function findById(id) {
    return db('users').where('id', id).first()
}

async function add(user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}

module.exports = {
    getAll,
    findBy,
    findById,
    add,
}