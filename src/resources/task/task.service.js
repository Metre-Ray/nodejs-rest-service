const taskRepo = require('./task.memory.repository');

const getAll = async () => await taskRepo.getAll();
const getOne = async id => await taskRepo.getById(id);
const updateTask = async (id, task) => await taskRepo.update(id, task);
const deleteTask = async id => await taskRepo.deleteTask(id);
const addTask = async task => await taskRepo.add(task);

module.exports = {
    getAll,
    getOne,
    updateTask,
    deleteTask,
    addTask
};
