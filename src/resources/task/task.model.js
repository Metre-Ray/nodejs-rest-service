const uuid = require('uuid');

class Task {
    constructor({
        id = uuid(),
        title = 'Title',
        order = 'order',
        description = 'id',
        userId = 'id', // assignee
        boardId = 'id',
        columnId = 'id'
    }) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }

    static toResponse(task) {
        const {
            id,
            title,
            order,
            description,
            userId,
            boardId,
            columnId
        } = task;
        return {
            id,
            title,
            order,
            description,
            userId,
            columnId,
            boardId
        };
    }
}

module.exports = Task;
