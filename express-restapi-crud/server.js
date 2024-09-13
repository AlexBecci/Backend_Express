const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

//get
app.get('/products', (req, res) => {
    res.send('Obteniendo productos')
})
//post
app.post('/products', (req, res) => {
    res.send('Creando productos')
})
//put
app.put('/products', (req, res) => {
    res.send('Actualizando productos')
})
//delete
app.delete('/products', (req, res) => {
    res.send('Eliminando productos')
})
//get
app.get('/products/:id', (req, res) => {
    res.send('Obteniendo un producto')
})

app.listen(3000)
console.log('Server on port 3000')