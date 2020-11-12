const User = require('./user.model');
const Task = require('../task/task.model');
const { hashPassword } = require('../../utils/hashHelper');

const getAll = async () => {
    return await User.find({});
};

const getById = async id => {
    const user = await User.findOne({ _id: id });
    return user;
};

const getByProperty = async (prop, value) => {
    const users = await User.find({ [prop]: value });
    return users;
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
    const hashedPassword = await hashPassword(user.password);
    const newUser = { ...user, password: hashedPassword };
    return await User.create(newUser);
};

module.exports = {
    getAll,
    getById,
    update,
    deleteUser,
    add,
    getByProperty
};
