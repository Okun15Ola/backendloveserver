const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if(req.url === '/dashboard') {
        res.end(fs.readFileSync('dashboard.html'))
    }else if(req.url === '/setting'){
        res.end(fs.readFileSync('setting.html'))
    }else if(req.url === '/user'){
        res.end(fs.readFileSync('user.html'))
    }else{
        res.end('<h1>Hello World</h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Port listening  at 8000');
})