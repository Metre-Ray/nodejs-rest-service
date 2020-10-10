const boardRepo = require('./board.memory.repository');

const getAll = async () => await boardRepo.getAll();
const getOne = async id => await boardRepo.getById(id);
const updateBoard = async (id, board) => await boardRepo.update(id, board);
const deleteBoard = async id => await boardRepo.deleteBoard(id);
const addBoard = async board => await boardRepo.add(board);

module.exports = {
    getAll,
    getOne,
    updateBoard,
    deleteBoard,
    addBoard
};
