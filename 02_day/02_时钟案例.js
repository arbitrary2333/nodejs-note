const fs = require('fs')

const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './素材/index.html'), 'utf-8', (err, data) => {
    if(err) return console.log('读取HTML文件失败！')
    resolveCSS(data)
    resolveScript(data)
    resolveHTML(data)
})

function resolveCSS(htmlStr){
    const r1 = regStyle.exec(htmlStr)
    const newCss = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCss, (err) => {
        if(err) return console.log('写入css样式文件失败！')
        console.log('写入css样式文件成功！')
    })
}

function resolveScript(htmlStr){
    const r1 = regScript.exec(htmlStr)
    const newScript = r1[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './clock/index.js'), newScript, (err) => {
        if(err) return console.log('写入js文件失败！')
        console.log('写入js文件成功！')
    })
}

function resolveHTML(htmlStr){
    const newHTML = htmlStr
        .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
        .replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, (err) => {
        if(err) return console.log('写入html文件失败！')
        console.log('写入html文件成功！')
    })
}
