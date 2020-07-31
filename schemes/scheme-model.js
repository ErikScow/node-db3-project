const db = require('../db-config')

function find() {
   return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first()
}


function add(user) {
    return db('schemes')
        .insert(user)
        .then(idArray => {
            return findById(idArray[0])
        })
        .catch(err => {
            console.log(err)
        })
    
}

function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes)
        .then(numChanged => {
            return findById(id)
        })
        .catch(err => console.log(err))
}

function remove(id) {
    return db('schemes').where({ id }).del()
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}