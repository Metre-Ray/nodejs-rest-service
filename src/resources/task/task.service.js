const taskRepo = require('./task.memory.repository');

// const getAll = async () => await taskRepo.getAll();
// const getOne = async id => await taskRepo.getById(id);
const updateTask = async (id, task) => await taskRepo.update(id, task);
const deleteTask = async id => await taskRepo.deleteTask(id);
const addTask = async task => await taskRepo.add(task);
const getByBoardId = async id => await taskRepo.getByBoardId(id);
const getByBoardAndTaskId = async (boardId, taskId) => {
    const tasks = await getByBoardId(boardId);
    if (tasks) {
        const task = tasks.find(item => item.id === taskId) || null;
        return task;
    }
    return null;
};

module.exports = {
    updateTask,
    deleteTask,
    addTask,
    getByBoardId,
    getByBoardAndTaskId
};
