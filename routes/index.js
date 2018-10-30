'use strict';

// display homepage
module.exports= function(app){
  app.get('/', function(request, response){
    response.render('pages/index');
  });

// display about page
  app.get('/about', function(request, response){
    response.render('pages/about');
  });
};