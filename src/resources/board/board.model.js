const uuid = require('uuid');
const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
    {
        title: String,
        columns: [
            {
                _id: String,
                title: String,
                order: Number
            }
        ],
        _id: {
            type: String,
            default: uuid
        }
    },
    {
        collection: 'boards'
    }
);

boardSchema.statics.toResponse = board => {
    const { id, title, columns } = board;
    return { id, title, columns };
};

const Board = mongoose.model('boards', boardSchema);

module.exports = Board;
