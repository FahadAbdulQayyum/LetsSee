const express = require('express');
const path = require('path')

const app = express();

// app.use('/', (req, res) => {
//     res.send('YaAllah, tae shukr!')
// })

app.use(express.static(path.join(path.resolve(), "public")))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // app.use('/', (req, res) => {
    // res.send("index")
    // res.render(index.ejs)
    // res.render("index", { name: 'Fahad' })
    res.render("index")
})

app.post('/', (req, res) => {
    console.log('req.body', req.body)
})

app.get('/success', (req, res) => {
    res.render('success')
})

app.listen(9000, () => {
    console.log('Server is running!')
})


//********************************/

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('res')
//     res.end('YaAllah')
// })

// server.listen(9000, () => {
//     console.log('Server is running!')
// })