const usersService = require('../users/user.service');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY, PATH_WHITELIST } = require('../../common/config');
const { checkHashedPassword } = require('../../utils/hashHelper');

const signToken = async (login, password) => {
    const users = await usersService.getByProperty('login', login);
    let user;
    if (users) {
        user = users.find(_user =>
            checkHashedPassword(password, _user.password)
        );
    }
    if (!user) {
        return null;
    }
    const { id, login: userLogin } = user;
    const token = jwt.sign({ id, userLogin }, JWT_SECRET_KEY, {
        expiresIn: '100m'
    });
    return token;
};

const checkToken = (req, res, next) => {
    if (PATH_WHITELIST.includes(req.path)) {
        return next();
    }

    const authHeader = req.header('Authorization');

    if (authHeader) {
        const [type, token] = authHeader.split(' ');
        if (type !== 'Bearer') {
            res.status(401).send('Wrong auth schema.');
        } else {
            try {
                jwt.verify(token, JWT_SECRET_KEY);
            } catch (e) {
                res.status(401).send('Unauthorized user.');
            }
            return next();
        }
    }

    res.status(401).send('Unauthorized user.');
};

module.exports = {
    signToken,
    checkToken
};
