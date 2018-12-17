var json = require('./api.turntable.js')
var express = require('express');
var app = express();

// 设置跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-with');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('X-Powered-By', '3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/api/v1/activity/api', function (req, res) {
  res.status(200);
  const data = {
    code: 100200,
    data: json,
    message: ''
  }
  res.json(data);
})

app.listen(9999, () => {
  console.log('listen: http://localhost:9999')
})
