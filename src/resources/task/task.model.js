const uuid = require('uuid');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title: String,
        order: Number,
        description: String,
        userId: String,
        boardId: String,
        columnId: String,
        _id: {
            type: String,
            default: uuid
        }
    },
    {
        collection: 'tasks'
    }
);

taskSchema.statics.toResponse = task => {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return {
        id,
        title,
        order,
        description,
        userId,
        columnId,
        boardId
    };
};

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;
