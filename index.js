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

const fs = require('fs');

const rs = fs.createReadStream('./qrcodes.json');
const ws = fs.createWriteStream('./copy.json');

switch(true){
    case req.url === '/' && req.method === 'GET':
        fs.readFile(__dirname + '/home.html', function(err, data){
            res.setHeader('content-type', 'text/html', 'charset = utf-8');
            res.writeHead(200);
            res.end(data);
        });
        rs.on('data', function(data){
            console.log(data);
        });
    break;
    case req.url === '/login' && req.method === 'GET':
        fs.readFile(__dirname + '/login.html', function(err, data){
            res.setHeader('content-type', 'text/html', 'charset = utf-8');
            res.writeHead(200);
            res.end(data);
        })
    break;
    default:
        fs.readFile(__dirname + '/404.html', function(err, data){
            res.setHeader('content-type', 'text/html', 'charset = utf-8');
            res.writeHead(404);
            res.end(data);
        })
        
}

}

const server = http.createServer(requestListener);
server.listen(8080);
