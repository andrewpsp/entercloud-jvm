'use strict';

const Hapi = require('hapi');
const Path = require('path'); 
const Inert = require('inert');
const server = new Hapi.Server();


server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('/home/entercloud/entercloud-jvm/code/index.html');
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
