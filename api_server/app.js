// 导入express
const express = require("express");
// 创建服务器的实例对象
const app = express();

// 导入cors中间件
const cors = require("cors");
// 将cors注册为全局中间件
app.use(cors());

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

// 封装res.cc函数,处理响应错误
app.use((req, res, next) => {
  // status默认值为1,表示失败
  // err的值,可能是一个错误对象,也可能是一个错误字符串
  res.cc = (info, status = 1) => {
    res.send({
      status,
      message: info instanceof Error ? info.message : info
    });
  };
  next()
});

// 导入配置文件
const config = require('./config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({secret: config.jwtSecretKey}).unless({path: [/^\/api\//]}))

// 导入并注册用户路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);

// 导入并使用用户信息路由模块
const userinfoRouter = require('./router/userinfo')
// 注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证
app.use('/my', userinfoRouter)

const artCateRouter = require('./router/artcate')
app.use('/my/article', artCateRouter)

const joi = require('joi')
// 错误级别中间件
app.use(function(err, req, res, next){
  // 数据验证失败
  if(err instanceof joi.ValidationError) return res.cc(err)
  // 捕获认证失败的错误
  if (err.name === 'UnauthorizedError') return res.cc('认证失败！')
  // 未知错误
  res.cc(err)
})

// 调用app.listen方法,指定端口号并启动web服务器
app.listen(3007, () => {
  console.log("api server running at http://127.0.0.1:3007");
});
