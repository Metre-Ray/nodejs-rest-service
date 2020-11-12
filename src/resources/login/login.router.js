const router = require('express').Router();
const loginService = require('./login.service');

router.route('/').get(async (req, res) => {
    const { login, password } = req.body;
    const token = await loginService.signToken(login, password);

    if (!token) {
        res.status(403).send('Wrong credentials.');
    } else {
        res.status(200).json(token);
    }
});

module.exports = router;
