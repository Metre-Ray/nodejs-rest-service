const db = require('../../database/database');

const TABLE_NAME = 'tasks';

const getAll = async () => {
    return db.getTable(TABLE_NAME);
};

const getById = async id => {
    const user = db.getEntity(TABLE_NAME, id) || null;
    return user;
};

const update = async (id, task) => {
    const newUser = db.updateEntity(TABLE_NAME, id, task);
    return newUser;
};

const deleteTask = async id => {
    return db.deleteEntity(TABLE_NAME, id);
};

const add = async task => {
    db.addEntity(TABLE_NAME, task);
    return task;
};

module.exports = {
    getAll,
    getById,
    update,
    deleteTask,
    add
};
