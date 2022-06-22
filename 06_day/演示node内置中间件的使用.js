const express = require('express')

const app = express()

// 解析JSON格式数据
app.use(express.json())

// 解析url-encoded格式数据
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1')
})