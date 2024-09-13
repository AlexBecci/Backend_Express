/*//funcion vieja para importarlas sin express
 function HomeRoutes(app) {
    app.all('/about', (req, res) => {
        res.send('About Page lorem ipsum')
    })

    app.get('/dashboard', (req, res) => {
        res.send('Dashboard page')
    })
}

module.exports = HomeRoutes */
//nueva forma
const { Router } = require('express')
const router = Router()

router.all('/about', (req, res) => {
    res.send('About Page lorem ipsum')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard page')
})

module.exports = router