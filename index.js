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
    res.send('Hello World')
})
//consumiendo un archivo
app.get('/miarchivo', (req, res) => {
    res.sendFile('./image.png', {
        root: __dirname
    })
})

app.get("/isAlive", (req, res) => {
    res.sendStatus(204)
})

app.get('/user', (req, res) => {
    res.json({ "name": "ALEX", lastname: "BECCI", age: 22, points: [1, 2, 3], adress: { city: 'New York', street: "AVENIDA123" } })
})
/* app.get('/products', (req, res) => {
    res.send('Lista de productos')
})

app.post('/products', (req, res) => {
    res.send('Creando productos')
})

app.put('/products', (req, res) => {
    res.send('ACtualizando un producto')
})

app.delete('/products', (req, res) => {
    res.send('Eliminando un producto')
})

app.patch('/products', (req, res) => {
    res.send('Actualizando parte del producto')
}) */

app.listen(3000)
console.log('Server On Port 3000')
