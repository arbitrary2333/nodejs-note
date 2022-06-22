const express = require('express')

const router = express.Router()

router.get('/get', (req, res) => {
    // 通过req.query获取客户端通过查询字符串，发送到服务端的数据
    const query = req.query
    console.log(query)
    res.send({
        status: 0,
        msg: 'GET请求成功！',
        data: query
    })
})

router.post('/post', (req, res) => {
    // 获取客户端通过请求体发送到服务器的URL-encoded数据,需要引入中间件
    const body = req.body
    console.log(body)
    res.send({
        status: 0,
        msg: 'POST请求成功！',
        data: body
    })
})

module.exports = router