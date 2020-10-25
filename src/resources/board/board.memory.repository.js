const Task = require('../task/task.model');
const Board = require('./board.model');

const getAll = async () => {
    return await Board.find({});
};

const getById = async id => {
    return await Board.findOne({ _id: id });
};

const update = async (id, board) => {
    const newBoard = await Board.updateOne({ _id: id }, board);
    return newBoard;
};

const deleteBoard = async id => {
    const count = (await Board.deleteOne({ _id: id })).deletedCount;
    await Task.deleteMany({ boardId: id });
    return count;
};

const add = async board => {
    return await Board.create(board);
};

module.exports = {
    getAll,
    getById,
    update,
    deleteBoard,
    add
};
