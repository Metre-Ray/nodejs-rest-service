const db = require('../../database/database');

const TABLE_NAME = 'tasks';

const getAll = async () => {
    return db.getTable(TABLE_NAME);
};

const getByBoardId = async id => {
    return db.getEntityByField(TABLE_NAME, 'boardId', id);
};

const getById = async id => {
    return db.getEntity(TABLE_NAME, id);
};

const update = async (id, task) => {
    return db.updateEntity(TABLE_NAME, id, task);
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
    getByBoardId,
    update,
    deleteTask,
    add
};
