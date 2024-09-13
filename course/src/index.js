

//levantando el servidor con express
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

const HomeRoutes = require('./routes/home')
const UsersRoutes = require('./routes/users')

//SETTINGS
app.set('case sensitive routing', true)
app.set('appName', "Setting Express")
app.set('port', 3000)

//haciendo q mi projecto tome los json
app.use(express.json())
//implementando morgan
app.use(morgan('dev'))
//vieja
/* HomeRoutes(app)
UsersRoutes(app) */
//nueva
app.use(HomeRoutes)
app.use(UsersRoutes)

//isAuthenticated
/* app.use((req, res, next) => {
    console.log(req.query.login)
    if (req.query.login === 'alexbecci@gmail.com') {
        next()
    }
    else {
        res.send('No autorizado')
    }
}) */


//implementando que tome mi static/public
app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/uploads', express.static(path.join(__dirname, './uploads')))

app.listen(3000)
console.log('Server On Port 3000')
