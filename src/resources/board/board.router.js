const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
    const board = await boardsService.addBoard(req.body);
    res.json(Board.toResponse(board));
});

router.route('/:id').get(async (req, res) => {
    const board = await boardsService.getOne(req.params.id);
    if (!board) {
        res.status(404).send('Board not found.');
        return;
    }
    res.status(200).send(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
    const board = await boardsService.updateBoard(req.params.id, req.body);
    if (!board) {
        res.status(404).send('Board not found.');
        return;
    }
    res.status(200).send(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
    const board = await boardsService.deleteBoard(req.params.id);
    if (!board) {
        res.status(404).send('Board not found.');
        return;
    }
    res.status(200).send(Board.toResponse(board));
});

module.exports = router;
