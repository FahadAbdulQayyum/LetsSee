const express = require('express');
const path = require('path')

const app = express();

app.use(express.static(path.join(path.resolve(), "public")))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

const arr = []

app.get('/', (req, res) => {
    res.render("index")
})

app.post('/', (req, res) => {
    let data = { name: req.body.text, email: req.body.email, password: req.body.password }
    arr.push(data)
    // arr.push({ name: req.body.name, password: req.body.password })
    res.redirect("/success")
})

app.get('/users', (req, res) => {
    res.json({ arr })
})

app.get('/success', (req, res) => {
    res.render('success', { name: req.body.name })
})

app.listen(9000, () => {
    console.log('Server is running!')
})