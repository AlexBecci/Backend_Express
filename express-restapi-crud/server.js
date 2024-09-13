const express = require('express')
const morgan = require('morgan')

const app = express()
//forzando datos como si buena traido de la base
let products = [
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
app.put('/products/:id', (req, res) => {
    const newData = req.body
    const { id } = req.params
    const productFound = products.find((product) => {
        return product.id === parseInt(id)
    })
    if (!productFound) {
        return res.status(404).json({
            message: 'Product not found'
        })
    }
    products = products.map(product => product.id === parseInt(id) ? { ...product, ...newData } : product)
    res.json({
        message: "Product Update Successfully"
    })
})
//delete
app.delete('/products/:id', (req, res) => {
    const { id } = req.params
    const productFound = products.find((product) => {
        return product.id === parseInt(id)
    })
    if (!productFound) {
        return res.status(404).json({
            message: 'Product not found'
        })
    }
    products = products.filter((product) => product.id !== parseInt(id))
    res.sendStatus(204)
})
//get
app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const productFound = products.find((product) => {
        return product.id === parseInt(id)
    })
    if (!productFound) {
        return res.status(404).json({
            message: "Product Not Found"
        })
    }
    res.send(productFound)
    /* res.send(`Obteniendo un producto  ${id}`) */
})

app.listen(3000)
console.log('Server on port 3000')