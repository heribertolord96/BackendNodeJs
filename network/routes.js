express = require('expres');
const message = require('../../components/messages/network')

const routes = function (server) {
    server.use('/message', message);
}

module.exports = routes;