const getTable = tableName => DB[tableName] || null;
const getEntity = (tableName, id) =>
    DB[tableName].find(el => el.id === id) || null;
const updateEntity = (tableName, id, newEntity) => {
    const entityIndex = DB[tableName].findIndex(item => item.id === id);
    if (entityIndex === -1) {
        return null;
    }
    DB[entityIndex] = newEntity;
    return newEntity;
};
const addEntity = (tableName, entity) => DB[tableName].push(entity);
const deleteEntity = (tableName, id) => {
    const index = DB[tableName].findIndex(entity => entity.id === id);
    if (index === -1) {
        return null;
    }
    const entity = DB[tableName].splice(index, 1);
    return entity;
};

// const getEntityByField = (tableName, field) => {
//     // TODO
// };

const DBInterface = {
    getEntity,
    getTable,
    updateEntity,
    addEntity,
    deleteEntity
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
            userId: '456',
            boardId: 'bid-2',
            columnId: 'col-id-5'
        }
    ]
};

module.exports = DBInterface;
