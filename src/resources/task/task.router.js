const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
    const tasks = await tasksService.getByBoardId(req.params.boardId);
    if (!tasks) {
        res.json([]);
        return;
    }
    res.json(tasks.map(Task.toResponse));
});

router.route('/').post(async (req, res) => {
    const task = await tasksService.addTask(
        new Task({ ...req.body, boardId: req.params.boardId })
    );
    res.json(Task.toResponse(task));
});

router.route('/:id').get(async (req, res) => {
    const task = await tasksService.getByBoardAndTaskId(
        req.params.boardId,
        req.params.id
    );
    if (!task) {
        res.status(404).send('Task not found.');
        return;
    }
    res.status(200).send(Task.toResponse(task));
});

router.route('/:id').put(async (req, res) => {
    const task = await tasksService.updateTask(req.params.id, req.body);
    if (!task) {
        res.status(404).send('Task not found.');
        return;
    }
    res.status(200).send(Task.toResponse(task));
});

router.route('/:id').delete(async (req, res) => {
    const task = await tasksService.deleteTask(req.params.id);
    if (!task) {
        res.status(404).send('Task not found.');
        return;
    }
    res.status(200).send(Task.toResponse(task));
});

module.exports = router;
