const db = require('../db-config')

function find() {
   return db('schemas')
}

function findById(id) {
    if (db('schemas').where({ id })) {
        return db('schemas').where({ id }).first()
    } else {
        return null
    }
    
}

function add(user) {
    db('schema').insert(user)
        .then(ids => {
            return findById(ids[0])
        })
}

function update(changes, id) {
    db('schema').where({ id }).update(changes)
        .then(ids => {
            return findById(ids[0])
        })
}

function remove(id) {

    db('schema').findById(id)
        .then(schema => {
            const deleted = schema
        })
    db('schema').where({ id }).del()
    return deleted
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}