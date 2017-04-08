'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();


server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/code_base',
        handler: function (request, reply) {
            reply.file('./home/entercloud/code_base/index.html');
        }
    });
});

server.connection({ port: 3000, host: '0.0.0.0' });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`server on gofundme.com/entercloud
    	${server.info.uri}`);
});