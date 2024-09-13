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
const morgan = require('morgan')
const app = express()

//function que devuelva algo
app.use((req, res, next) => {
    console.log(`Route: ${req.url}, Metodo: ${req.method}`)

    next()
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

//nuevo middleware
//isAuthenticated
app.use((req, res, next) => {
    console.log(req.query.login)
    if (req.query.login === 'alexbecci@gmail.com') {
        next()
    }
    else {
        res.send('No autorizado')
    }
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard page')
})

//IMPLEMENTANDO MIDDLEWARES
app.get('/profile', (req, res) => {
    res.send('profile page')
})


app.listen(3000)
console.log('Server On Port 3000')
