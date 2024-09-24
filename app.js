const express = require("express")
const app = express()
const port = 3001

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.redirect('/movies')
})

app.get('/movies', (req, res) => {
    res.send('lisiting movies')
})

app.get('/movie/:id', (req, res) => {
    const id = req.params.id
    res.send(`read movies${id}`)

})
app.listen(port, () => {
    console.log(` express server is running on http://localhost:${port}`)
})
