console.log('Hello word');

// server

const http = require('http');

const requestListener = function(req, res) {

/*
Request:
    URL pl http://poci.n-soft.net:8080
    METHOD pl GET, POST, DELETE, PATCH, PUT
    QUERY parameterek 
    BODY 
    HEADER pl "content-type: application/json"

Response:
    HEADER
    BODY
    STATUS pl 200
*/

switch(true){
    case req.url === '/' && req.method === 'GET':
        res.setHeader('content-type', 'text/html', 'charset = utf-8');
        res.writeHead(200);
        res.end('Cimlap <a href="/login">Bejelentkezes</a>');
    break
    case req.url == '/login' && req.method === 'GET':
        res.setHeader('content-type', 'text/html', 'charset = utf-8');
        res.writeHead(200);
        res.end('Bejelentkezes <a href="/">Cimlap</a>');
    break

}



    res.writeHead(200);
    res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);
