//QUERIES
app.get('/search', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    if (req.query.q === 'javascript') {
        res.send('Lista de libros Javascript')
    }
    else {
        res.send('Paginacion Normal')
    }
})
/* app.get('/user', (req, res) => {
    console.log(req.query)
}) */