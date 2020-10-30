/* eslint-disable no-unused-vars */
var express = require('express');
var path = require('path');

var app = express();
// app.use(express.json({ limit: '5mb', extended: true }));
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));


app.use('/', function (req, res, next) {
  next();
});

const server = app.listen(8088, () => {
  console
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});