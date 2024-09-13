

//levantando el servidor con express
const express = require('express')
const morgan = require('morgan')
const app = express()

//haciendo q mi projecto tome los json
app.use(express.json())
//implementando morgan
app.use(morgan('dev'))

app.get('/about', (req, res) => {
    res.send('About Page')
})
app.post('/profile',(req,res)=>{
    console.log(req.body)
    res.send('Profile Page')
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
