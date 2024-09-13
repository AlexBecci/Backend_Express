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

app.get('/', (req, res) => {
    res.send('Hello World')
})
//REQUEST PARAMS

//esperando valor de nombre
app.get('/user/:name', (req, res) => {
    const { name } = req.params
    res.send(`Hello ${name}`)
})
//realizando suma
app.get(`/add/:x/:y`, (req, res) => {
    const { x, y } = req.params
    res.send(`Resultado de ${x} + ${y} = ${(parseInt(x) + parseInt(y))}`)
})

//retornando una imagen 
app.get('/user/:name/photo', (req, res) => {
    const { name } = req.params
    if (name === "alex") {
        return res.sendFile('./image.png', {
            root: __dirname
        })
    }
    res.send("Usuario no autorizado")
})
//nombre
app.get('/hello/name/:username/age/:age', (req, res) => {
    const { username, age } = req.params
    res.send(`El usuario ${username} tiene ${age} años de edad`)
})
//consumiendo un archivo
/* app.get('/miarchivo', (req, res) => {
    res.sendFile('./image.png', {
        root: __dirname
    })
})

app.get("/isAlive", (req, res) => {
    res.sendStatus(204)
})

app.get('/json', (req, res) => {
    res.json({ "name": "ALEX", lastname: "BECCI", age: 22, points: [1, 2, 3], adress: { city: 'New York', street: "AVENIDA123" } })
})

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send("NUEVO USUARIO CREADO ")
}) */

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
