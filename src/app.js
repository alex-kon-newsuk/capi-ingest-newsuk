var express = require('express');
var routes = require('./routes/routes');
var middleware = require('./middleware/middleware');
var app = express();

middleware(app);
routes(app);

app.listen(4000, function () {
  console.log('CAPI Injgestion Service UK app listening on port 4000!');
});