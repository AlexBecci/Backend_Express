//importando app de forma vieja sin el module de express
/* function UsersRoutes(app) {
    app.get('/UserName', (req, res) => {
        res.send('Username Route')
    })

    app.post('/profile', (req, res) => {
        console.log(req.body)
        res.send("Pofile Page")
    })
}
module.exports = UsersRoutes */
//nueva forma
const { Router } = require('express')
const router = Router()

router.get('/UserName', (req, res) => {
    res.send('Username Route')
})

router.get('/profile', (req, res) => {
    console.log(req.body)
    res.send("Pofile Page")
})

module.exports = router