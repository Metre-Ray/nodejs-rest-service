const uuid = require('uuid');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: String,
        login: String,
        password: String,
        _id: {
            type: String,
            default: uuid
        }
    },
    {
        collection: 'users'
    }
);

userSchema.statics.toResponse = user => {
    const { id, name, login } = user;
    return { id, name, login };
};

const User = mongoose.model('users', userSchema);

module.exports = User;
