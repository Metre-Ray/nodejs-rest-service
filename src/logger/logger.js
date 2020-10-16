const winston = require('winston');
const { combine, printf } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combinedLogs.log' })
    ],
    format: combine(winston.format.timestamp(), myFormat)
});

module.exports = logger;
