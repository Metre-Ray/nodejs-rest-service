const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const logger = require('../logger/logger');

const connectToDB = cb => {
    mongoose.connect(MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('error', err =>
        logger.error(`MongoDB connection error:\n${err.message}`)
    );
    db.once('open', () => {
        logger.info('Successfully connect to DB');
        if (cb) {
            return cb();
        }
    });
};

module.exports = { connectToDB };
