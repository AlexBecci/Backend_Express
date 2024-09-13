//procesar textos del body
app.use(express.text())
//procesar json del body
app.use(express.json())
//procesar urlcode
app.use(express.urlencoded({ extended: false }))


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
