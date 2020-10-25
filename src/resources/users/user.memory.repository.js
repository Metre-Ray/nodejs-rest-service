const User = require('./user.model');
const Task = require('../task/task.model');

const getAll = async () => {
    return await User.find({});
};

const getById = async id => {
    const user = await User.findOne({ _id: id });
    return user;
};

const update = async (id, user) => {
    const newUser = await User.updateOne({ _id: id }, user);
    return newUser;
};

const deleteUser = async id => {
    const user = (await User.deleteOne({ _id: id })).deletedCount;
    if (user) {
        await Task.updateMany({ userId: id }, { userId: null });
    }
    return user;
};

const add = async user => {
    return await User.create(user);
};

module.exports = {
    getAll,
    getById,
    update,
    deleteUser,
    add
};
