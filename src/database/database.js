const getTable = tableName => DB[tableName] || null;
const getEntity = (tableName, id) => {
    const entity = DB[tableName].filter(el => el.id === id) || null;
    if (entity.length === 0) {
        return null;
    }
    return entity;
};
const updateEntity = (tableName, id, newEntity) => {
    const entityIndex = DB[tableName].findIndex(item => item.id === id);
    if (entityIndex === -1) {
        return null;
    }
    DB[tableName][entityIndex] = { id, ...newEntity };
    return DB[tableName][entityIndex];
};
const addEntity = (tableName, entity) => DB[tableName].push(entity);
const deleteEntity = (tableName, id) => {
    const index = DB[tableName].findIndex(entity => entity.id === id);
    if (index === -1) {
        return null;
    }
    const removedEntity = DB[tableName].splice(index, 1)[0];
    if (tableName === 'boards') {
        DB.tasks = DB.tasks.filter(task => task.boardId !== id);
    } else if (tableName === 'users') {
        DB.tasks.forEach(task => {
            if (task.userId === id) {
                task.userId = null;
            }
        });
    }
    return removedEntity;
};
const getEntityByField = (tableName, field, value) => {
    const entity = DB[tableName].filter(item => item[field] === value);
    return entity.length ? entity : null;
};

const DBInterface = {
    getEntity,
    getTable,
    updateEntity,
    addEntity,
    deleteEntity,
    getEntityByField
};

const DB = {
    users: [
        {
            id: '123',
            name: 'user-1',
            login: 'login-1',
            password: 'pass-1'
        },
        {
            id: '456',
            name: 'user-2',
            login: 'login-2',
            password: 'pass-2'
        },
        {
            id: '789',
            name: 'user-3',
            login: 'login-3',
            password: 'pass-3'
        }
    ],
    boards: [
        {
            id: 'bid-1',
            title: 'board-1',
            columns: [
                {
                    id: 'col-id-1',
                    title: 'column-title-1',
                    order: 'order-1'
                }
            ]
        },
        {
            id: 'bid-2',
            title: 'board-2',
            columns: []
        }
    ],
    tasks: [
        {
            id: 'task-id-1',
            title: 'task-title-1',
            order: 'order-1',
            description: 'cool task',
            userId: '456',
            boardId: 'bid-1',
            columnId: 'col-id-4'
        },
        {
            id: 'task-id-2',
            title: 'task-title-2',
            order: 'order-2',
            description: 'intricate task',
            userId: '456',
            boardId: 'bid-2',
            columnId: 'col-id-5'
        },
        {
            id: 'task-id-3',
            title: 'task-title-3',
            order: 'order-3',
            description: 'very intricate task',
            userId: '789',
            boardId: 'bid-2',
            columnId: 'col-id-5'
        },
        {
            id: 'task-id-4',
            title: 'task-title-4',
            order: 'order-4',
            description: 'funny task',
            userId: '123',
            boardId: 'bid-2',
            columnId: 'col-id-6'
        }
    ]
};

module.exports = DBInterface;
