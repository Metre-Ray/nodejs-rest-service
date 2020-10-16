const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/board/board.router');
const taskRouter = require('./resources/task/task.router');
const logger = require('./logger/logger');
const messageFromRequest = require('./utils/messageFromRequest');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use((req, res, next) => {
    logger.info(messageFromRequest(req));
    next();
});

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});

app.use((err, req, res, next) => {
    logger.error(messageFromRequest(req, `Server error ${err.message}`));
    res.status(500).send('Internal Server Error');
    next(err);
});

process.on('uncaughtException', error => {
    logger.error(`Uncaught Exception: ${error.message}`);
});

process.on('unhandledRejection', reason => {
    logger.error(`Unhandled Rejection: ${reason.message}`);
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);

module.exports = app;
