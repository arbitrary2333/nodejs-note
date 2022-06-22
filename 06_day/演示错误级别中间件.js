const express = require('express')

const app = express()

app.get('/', (req, res) => {
    throw new Error('服务器内部发生了错误')
    res.send('Home page.')
})

app.use(function (err, req, res, next) {
    console.log('发生了错误' + err.message)
    res.send('Error：' + err.message)
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})