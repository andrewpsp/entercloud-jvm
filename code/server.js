'use strict';

const Hapi = require('hapi');
const Path = require('path'); 
const Inert = require('inert');
const Boom = require('boom');
const glob = require('glob');
const secret = require('./config');
const mongoose = require('mongoose');

const server = new Hapi.Server();

const dbUrl = 'mongodb://0.0.0.0:27017/hapi-app'; 
//server.register(reguire('hapi-auth-jwt'), (err) => { 

// strategy both a name 
// scheme of 'jwt' 
//server.auth.strategy('jwt', 'jwt', { 
//   key: secret, 
//   verifyOptions: { algorithms: ['HS256'] }
// });  --

// look through the routes in subdirectories of api and create new route for each
glob.sync('api/**/routes/*.js', {
  root: _dirname
}).forEach(file => { 
  const route = require(path.join(_dirname, file)); 
  server.route(route);
  });
}); 

server.register(require('inert'),
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('/var/www/html/index.html'); 
            /*reply.file('/home/entercloud/entercloud-jvm/code/index.html'); */ 
        }
        
       // method: 'GET',
        //path: '/start',
       // handler: function (request, reply) {
       //     reply.file('/public/entercloud/entercloud_landing/index.html'); 
       // }
    
       // method: 'GET',
       // path: '/dashboard',
       // handler: function (request, reply) {
       //     reply.file('/public/entercloud/entercloud_dashboard/index.html'); 
       // }
                                            
      
       // method: 'GET',
       // path: '/{param*}',
       // handler: {
       //   directory: {
       //     path: 'public'
      //v  }
    //}
                                            
    });
});

server.connection({ port: 3000, host: '0.0.0.0' });

server.start((err) => {

    if (err) {
        throw err;
    }
 // once started, connect to mongo through mongoose
    mongoose.connect(dbUrl, {}, (err) => { 
    console.log(`server on gofundme.com/entercloud
    	${server.info.uri}`);
});
