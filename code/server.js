'use strict';

const Hapi = require('hapi');
const Path = require('path'); 
const Inert = require('inert');
const server = new Hapi.Server();


server.register(require('inert'), (err) => {boar

    if (err) {
        throw err;
    }


        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('/public/entercloud/index.html'); 
            /*reply.file('/home/entercloud/entercloud-jvm/code/index.html'); */ 
        }
        
        method: 'GET',
        path: '/start',
        handler: function (request, reply) {
            reply.file('/public/entercloud/entercloud_landing/index.html'); 
        }
    
        method: 'GET',
        path: '/dashboard',
        handler: function (request, reply) {
            reply.file('/public/entercloud/entercloud_dashboard/index.html'); 
        }
                                            
      
        method: 'GET',
        path: '/{param*}',
        handler: {
          directory: {
            path: 'public'
        }
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
