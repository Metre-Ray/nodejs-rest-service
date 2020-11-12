const usersRepo = require('./user.memory.repository');

const getAll = async () => await usersRepo.getAll();
const getOne = async id => await usersRepo.getById(id);
const updateUser = async (id, user) => await usersRepo.update(id, user);
const deleteUser = async id => await usersRepo.deleteUser(id);
const addUser = async user => await usersRepo.add(user);
const getByProperty = async (prop, value) =>
    await usersRepo.getByProperty(prop, value);

module.exports = {
    getAll,
    getOne,
    updateUser,
    deleteUser,
    addUser,
    getByProperty
};
