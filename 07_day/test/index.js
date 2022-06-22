const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'my_db_01'
})

// 查询语句
const sqlStr = 'select * from users where status = 0'
db.query(sqlStr, (err, results) => {
    if (err) return console.log(err.message)
    console.log(results)
})

// 插入语句
// const user = { username: 'zhaoliu', password: 963258 }
// const sqlStr2 = 'INSERT INTO users SET ?'
// db.query(sqlStr2, user, (err, results) => {
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1){
//         console.log('插入数据成功！')
//     }
// })

// 删除语句
// const sqlStr3 = 'delete from users where id=?'
// db.query(sqlStr3, 16, (err, results) => {
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1){
//         console.log('删除数据成功！')
//     }
// })

// 标记删除
// const sqlStr4 = 'update users set status=? where id=?'
// db.query(sqlStr4, [1, 10], (err, results) => {
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1){
//         console.log('标记删除数据成功！')
//     }
// })