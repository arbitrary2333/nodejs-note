const fs = require('fs')

// fs.writeFile('./素材/01_day.txt', '今天第一天学Node', (err) => {
//     console.log(err)
// })

// fs.readFile('./素材/01_day.txt', 'utf-8', (err, dataStr) => {
//     if(err){
//         return console.log("读取文件失败"+err.message)
//     }
//     console.log('读取文件成功！  '+dataStr)
//     // console.log(err)
//     // console.log('-------')
//     // console.log(dataStr)
// })

// 整理成绩
// C:\\Users\\86180\\Desktop\\面试题\\nodejs学习笔记\\素材\\成绩.txt
fs.readFile(__dirname + '/素材/成绩.txt', 'utf8', (err, dataStr) => {
    if (err) {
        return console.log("读取文件失败" + err.message)
    }
    // console.log('读取文件成功！'+dataStr)
    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace("=", ": "))
    })
    const newStr = arrNew.join('\r\n')
    fs.writeFile(__dirname + '/素材/成绩-ok.txt', newStr, (err) => {
        if (err) {
            return console.log("写入文件失败" + err.message)
        }
        console.log('文件写入成功')
    })
})