var express = require('express');
var app = express();

app.get('/api/team/251356', function(req, res) {
  console.log('wasup');
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
