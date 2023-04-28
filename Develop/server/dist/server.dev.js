"use strict";

var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express["static"]('../client/dist'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, function () {
  return console.log("Now listening on port: ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
