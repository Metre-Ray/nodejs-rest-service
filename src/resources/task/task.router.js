const router = require('express').Router();
const Task = require('./task.model');
const taskService = require('./task.service');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
    const tasks = await tasksService.getAll();
    res.json(tasks.map(Task.toResponse));
});

router.route('/').post(async (req, res) => {
    const task = await tasksService.addBoard(req.body);
    res.json(Task.toResponse(task));
});

router.route('/:id').get(async (req, res) => {
    const task = await tasksService.getOne(req.params.id);
    if (!task) {
        res.status(404).send('Board not found.');
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
    const task = await taskService.deleteTask(req.params.id);
    if (!task) {
        res.status(404).send('Task not found.');
        return;
    }
    res.status(200).send(Task.toResponse(task));
});

module.exports = router;
