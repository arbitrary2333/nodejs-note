const express = require('express')

const app = express()

const mv = (req, res, next) => {
    console.log('这是最简单的中间件函数')
    next()
}

// app.use(mv)

app.get('/', mv, (req, res) => {
    console.log('调用了“/”这个路由')
    res.send('Home page.')
})

app.get('/user', (req, res) => {
    res.send('User page.')
})

app.listen(80, () => {
    console.log('http:..127.0.0.1')
})