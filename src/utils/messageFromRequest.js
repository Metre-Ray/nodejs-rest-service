const messageFromRequest = (req, message = '') => {
    return `${req.url} ${req.method} body:${JSON.stringify(
        req.body
    )} message:${message}`;
};

module.exports = messageFromRequest;
