const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()
//SETTINGS
app.set('case sensitive routing', true)
app.set('appName', "Setting Express")
app.set('port', 3000)
//MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))

//ROUTES
app.get('/note.txt', (req, res) => {
    res.send('Esto no es un archivo');
})

app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send('Profile Page')
})

app.get('/UserName', (req, res) => {
    res.send("UserName route")
})


console.log(__dirname)

app.use("/public", express.static(path.join(__dirname, 'public')))
app.use("/uploads", express.static(path.join(__dirname, 'uploads')))

app.listen(app.get('port'));
console.table(`Server ${app.get('appName')} On Port ${app.get('port')}`)