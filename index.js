const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 5000

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        fs.readFile(path.resolve(__dirname, 'public', 'index.html'), (err,data) =>{
            if (err){
                throw err
            }
            res.writeHead(200, {
                'Content-type': 'text/html'
            })//res.writeHead(statusCode, header objects)
            res.end(data)
        })
    }
    else if (req.url === '/contact'){
        fs.readFile(path.resolve(__dirname, 'public', 'contact.html'), (err,data) =>{
            if(err){
                throw err
            }
            res.writeHead(200, {
                'Content-type': 'text/html'
            })
            res.end(data)
        })
    }


})

server.listen(port, () => {
    console.log(`server has been started ${port}`)
}) // server.listen(порт, колбек сработающий после запуска сервера)