const db = require('../data/dbConfig.js');

moduel.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(potluck) {
    return null;
}

async function update(id, changes) {
    return null;
}
function remove(id) {
    return null;
}
function getAll() {
    return db('potlucks')
}
function findById(id) {
    return null;
}