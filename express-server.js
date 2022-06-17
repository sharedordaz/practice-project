const express = require('express');
var app = express(); //As i understand, app is the server.

app.get('/', function(req, res){ // The '/' is to specify you are sending to the root of the server
    res.send('Hola Mundo express desde package'); //Is the equivalent to response.writte in http module, but you dont need res.writeHead and res.end
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  }); //You can add a callback function to console something, but is unnecessary.
