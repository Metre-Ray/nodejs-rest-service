const db = require('../../database/database');

const TABLE_NAME = 'boards';

const getAll = async () => {
    return db.getTable(TABLE_NAME);
};

const getById = async id => {
    const user = db.getEntity(TABLE_NAME, id) || null;
    return user;
};

const update = async (id, board) => {
    const newUser = db.updateEntity(TABLE_NAME, id, board);
    return newUser;
};

const deleteBoard = async id => {
    return db.deleteEntity(TABLE_NAME, id);
};

const add = async board => {
    db.addEntity(TABLE_NAME, board);
    return board;
};

module.exports = {
    getAll,
    getById,
    update,
    deleteBoard,
    add
};