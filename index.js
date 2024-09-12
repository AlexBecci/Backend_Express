//levantando servidor con node

/* const http = require('http')

const fs = require('fs')
//leyendo la ruta 
const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./static/index.html')
    read.pipe(res)
})

server.listen(3000)

console.log('Server On Port 3000') */

//levantando el servidor con express
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    /* console.log(req) */
    /*   res.sendFile('./static/index.html', {
          root: __dirname
      }) */
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('WHATER')
})

app.use((req, res) => {
    res.status(404).send("PAGE NOT FOUND")
})

app.listen(3000)
console.log('Server On Port 3000')
