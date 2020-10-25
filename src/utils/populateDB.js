const User = require('../resources/users/user.model');
const Task = require('../resources/task/task.model');
const Board = require('../resources/board/board.model');

const DB = {
    users: [
        {
            _id: '123',
            name: 'user-1',
            login: 'login-1',
            password: 'pass-1'
        },
        {
            _id: '456',
            name: 'user-2',
            login: 'login-2',
            password: 'pass-2'
        },
        {
            _id: '789',
            name: 'user-3',
            login: 'login-3',
            password: 'pass-3'
        }
    ],
    boards: [
        {
            _id: 'bid-1',
            title: 'board-1',
            columns: [
                {
                    _id: 'col-id-1',
                    title: 'column-title-1',
                    order: 'order-1'
                }
            ]
        },
        {
            _id: 'bid-2',
            title: 'board-2',
            columns: []
        }
    ],
    tasks: [
        {
            _id: 'task-id-1',
            title: 'task-title-1',
            order: 'order-1',
            description: 'cool task',
            userId: '456',
            boardId: 'bid-1',
            columnId: 'col-id-4'
        },
        {
            _id: 'task-id-2',
            title: 'task-title-2',
            order: 'order-2',
            description: 'intricate task',
            userId: '456',
            boardId: 'bid-2',
            columnId: 'col-id-5'
        },
        {
            _id: 'task-id-3',
            title: 'task-title-3',
            order: 'order-3',
            description: 'very intricate task',
            userId: '789',
            boardId: 'bid-2',
            columnId: 'col-id-5'
        },
        {
            _id: 'task-id-4',
            title: 'task-title-4',
            order: 'order-4',
            description: 'funny task',
            userId: '123',
            boardId: 'bid-2',
            columnId: 'col-id-6'
        }
    ]
};

const populateDB = () => {
    DB.users.forEach(user => User.create(user));
    DB.boards.forEach(board => Board.create(board));
    DB.tasks.forEach(task => Task.create(task));
};

module.exports = populateDB;
