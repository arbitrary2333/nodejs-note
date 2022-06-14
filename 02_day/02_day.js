const http = require('http')

const server = http.createServer()

// server.on('request', (req, res) => {
//     console.log('Someone visit our web server')
//     const url = req.url
//     const method = req.method
//     const str = `Your request url is ${url} and method is ${method}`
//     const ChineseStr = `您请求的URL是${url}，方法是${method}`
//     res.setHeader('Content-Type', 'text/html; charset=utf-8')
//     res.end(ChineseStr)
// })

server.on('request', (req, res) => {
    const url = req.url
    let content = '404 Not found'
    if(url === '/' || url === '/index.html'){
        content = '<h1>首页</h1>'
    }else if(url === '/about.html'){
        content = '<h1>关于页面</h1>'
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content)
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})