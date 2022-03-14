const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){

    // Router
    switch(true){
        case req.url === '/' && req.method ==='GET':
            fs.readFile('./views/home.html', (err, file) =>{
                res.setHeader('content-type', 'text/html');
                res.end(file);
            });
            break;
        case req.url === '/script.js' && req.method ==='GET':
            fs.readFile('./public/script.js', (err, file) =>{
                res.setHeader('content-type', 'application/javascript')
                res.end(file);
            });
            break;
        case req.url === '/qrcodes' && req.method ==='GET':
            fs.readFile('./qrcodes.json', (err, file) =>{
                res.setHeader('content-type', 'application/json')
                res.end(file);
            });
             break;
        case req.url === '/qrcodes' && req.method ==='POST':
            let body = "";
            req.on('data', function(chunk){
                body += chunk.toString();
            });
            req.on('end',function(){
                const newQr = JSON.parse(body);

                fs.readFile('./qrcodes.json',(err, data) => {
                    const qrcodes = JSON.parse(data);
                    qrcodes.push(newQr);
                    fs.writeFile('./qrcodes.json', JSON.stringify(qrcodes),()=>{
                        res.end(JSON.stringify(newQr));
                    })
                })
            })
        default:
            res.end('404');

    }

});
server.listen(8080);