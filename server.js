'use strict';

//assemble necessary tools
var express = require('express');
var routes = require('./routes/index.js');
var port = process.env.PORT || 3000;

var app = express();

// setup express application
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

// setup routes
routes(app);

// start server
app.listen(port, function(){
  console.log('Server listening on port :' + port + '......');
});