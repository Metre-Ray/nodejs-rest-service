const bcrypt = require('bcrypt');

const hashPassword = async password => {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

const checkHashedPassword = (password, hash) => {
    // eslint-disable-next-line no-sync
    return bcrypt.compareSync(password, hash);
};

module.exports = {
    hashPassword,
    checkHashedPassword
};
