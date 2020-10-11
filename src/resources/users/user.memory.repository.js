const db = require('../../database/database');

const TABLE_NAME = 'users';

const getAll = async () => {
    return db.getTable(TABLE_NAME);
};

const getById = async id => {
    const users = db.getEntity(TABLE_NAME, id);
    if (users.length) {
        return users[0];
    }
    return null;
};

const update = async (id, user) => {
    const newUser = db.updateEntity(TABLE_NAME, id, user);
    return newUser;
};

const deleteUser = async id => {
    return db.deleteEntity(TABLE_NAME, id);
};

const add = async user => {
    db.addEntity(TABLE_NAME, user);
    return user;
};

module.exports = {
    getAll,
    getById,
    update,
    deleteUser,
    add
};
