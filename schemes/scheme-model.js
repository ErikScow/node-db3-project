const db = require('../db-config')

function find() {
   return db('schemes')
}

function findById(id) {
    if (db('schemes').where({ id })) {
        return db('schemes').where({ id }).first()
    } else {
        return null
    }
    
}

function add(user) {
    db('schemes').insert(user)
        .then(ids => {
            return findById(ids[0])
        })
}

function update(changes, id) {
    db('schemes').where({ id }).update(changes)
        .then(ids => {
            return findById(ids[0])
        })
}

function remove(id) {

    db('schemes').findById(id)
        .then(schema => {
            const deleted = schema
        })
    db('schemes').where({ id }).del()
    return deleted
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}