//importing http server
const http = require("http");
const port = 8000;


http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/html'}); //Create a header (different than HTML header), that is made to give information about the information we are sending by response of the HTTP request
    response.write('hola mundo'); 
    response.end(); //End the response progress
}).listen(port);


  