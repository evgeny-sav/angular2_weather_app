// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static('./dist/'));

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);