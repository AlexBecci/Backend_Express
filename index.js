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
//procesar textos del body
app.use(express.text())
//procesar json del body
app.use(express.json())
//procesar urlcode
app.use(express.urlencoded({ extended: false }))


//metodo all
app.all('/info', (req, res) => {
    res.send("SERVER INFO")
})
app.get('/', (req, res) => {
    res.send('Hello World')
})



app.listen(3000)
console.log('Server On Port 3000')
