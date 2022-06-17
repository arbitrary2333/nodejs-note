// 导入
const express = require('express')

// 创建web服务器
const app = express()

// 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
// app.get('/user', (req, res) => {
//     res.send({name: 'llh', age: 22, gender: '男'})
// })

app.post('/user', (req, res) => {
    // 调用express提供的res.send()方法，向客户端响应一个文本字符串
    res.send('请求成功！')
})

// req.query接收固定参数
app.get('/', (req, res) => {
    // req.query 默认是一个空对象
    console.log(req.query)
    res.send(req.query)
})

// 接收动态参数
app.get('/user/:id', (req, res) => {
    // req.params 默认是一个空对象
    console.log(req.params)
    res.send(req.params)
})

// 调用app.listen(端口号, 回调)，启动服务器
app.listen(80, () => {
    console.log('express server runing at http://127.0.0.1')
})