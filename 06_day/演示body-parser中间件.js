const express = require('express')

const app = express()

app.use(express.json())

const parser = require('body-parser')

app.use(parser.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1')
})