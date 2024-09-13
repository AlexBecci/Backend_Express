const express = require('express')
const morgan = require('morgan')

const app = express()
//forzando datos como si buena traido de la base
const products = [
    { id: 1, name: 'Alex', price: 3000 }
]
app.use(morgan('dev'))
app.use(express.json())
//get
app.get('/products', (req, res) => {
    /* res.send('Obteniendo productos') */
    res.json(products)
})
//post 
app.post('/products', (req, res) => {
    const newProduct = { ...req.body, id: products.length + 1 }
    products.push(newProduct)
    /*  res.send(`Producto ${newProduct} creado con exito`) */
    res.send(newProduct)
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
    console.log(req.params.id)
    const { id } = req.params
    console.log(id)
    const productFound = products.find((product) => {
        return product.id === parseInt(id)
    })
    if (!productFound) {
        return res.status(404).json({
            message: "Product Not Found"
        })
    }
    console.log(productFound)
    res.send(productFound)
    /* res.send(`Obteniendo un producto  ${id}`) */
})

app.listen(3000)
console.log('Server on port 3000')