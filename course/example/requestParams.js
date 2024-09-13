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

app.listen(3000)
console.log('Server On Port 3000')