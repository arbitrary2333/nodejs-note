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
  res.send("login success");
};
