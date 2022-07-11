/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
const db = require("../db/index");
/**
 * 在当前项目中，使用 bcryptjs 对用户密码进行加密，优点：
    加密之后的密码，无法被逆向破解
    同一明文密码多次加密，得到的加密结果各不相同，保证了安全性
 */
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const config = require('../config')
// 注册用户的处理函数
exports.register = (req, res) => {
  // 接收表单数据
  const userInfo = req.body;
  // 判断数据是否合法
  if (!userInfo.username || !userInfo.password) {
    return res.cc("用户名和密码不能为空!");
  }
  const sqlCheck = "select * from ev_users where username=?";
  db.query(sqlCheck, [userInfo.username], (err, results) => {
    // 执行sql语句失败
    if (err) return res.cc(err.message);
    // 用户名被占用
    if (results.length) {
      return res.cc("用户名被占用请更换其他用户名");
    }
    userInfo.password = bcrypt.hashSync(userInfo.password, 10);

    // 插入新用户
    const sqlInsert = "insert into ev_users set ?";
    db.query(sqlInsert, { username: userInfo.username, password: userInfo.password }, (err, results) => {
        // 执行sql语句失败
        if (err) return res.cc(err.message);
        // sql执行成功,但影响行数不为1
        if (results.affectedRows !== 1) {
          return res.cc("注册用户,失败请稍后再试!");
        }
        // 注册成功
        res.cc("注册成功!");
      }
    );
  });
};

// 登录的处理函数
exports.login = (req, res) => {
  // 接收表单数据
  const userinfo = req.body
  // 定义 SQL 语句
  const sql = 'select * from ev_users where username=?'
  // 执行 SQL 语句，查询用户的数据
  db.query(sql, userinfo.username, function(err, results){
    // 执行 SQL 语句失败
    if(err) return res.cc(err)
    // 执行 SQL 语句成功，但是查询到数据条数不等于 1
    if(results.length !== 1) return res.cc('登录失败！')
    // 拿着用户输入的密码,和数据库中存储的密码进行对比
    const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
    // 如果对比的结果等于 false, 则证明用户输入的密码错误
    if(!compareResult){
      res.cc('登录失败！')
    }
    // 通过 ES6 的高级语法，快速剔除 密码 和 头像 的值
    // 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
    const user = {...results[0], password: '', user_pic: ''}
    // 生成Token字符串
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: '10h'  //token有效期为10个小时
    })
    // 将生成的 Token 字符串响应给客户端
    res.send({
      status: 0,
      message: '登录成功',
      // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
      token: 'Bearer ' + tokenStr
    })
  })
};
