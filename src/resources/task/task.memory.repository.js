const Task = require('./task.model');

const getAll = async () => {
    return await Task.find({});
};

const getByBoardId = async id => {
    return await Task.find({ boardId: id });
};

const getById = async id => {
    return await Task.findOne({ _id: id });
};

const update = async (id, task) => {
    const newTask = await Task.updateOne({ _id: id }, task);
    return newTask;
};

const deleteTask = async id => {
    const count = (await Task.deleteOne({ _id: id })).deletedCount;
    return count;
};

const add = async task => {
    return await Task.create(task);
};

module.exports = {
    getAll,
    getById,
    getByBoardId,
    update,
    deleteTask,
    add
};
