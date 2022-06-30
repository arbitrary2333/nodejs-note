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

// 导入并注册用户路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);

// 调用app.listen方法,指定端口号并启动web服务器
app.listen(3007, () => {
  console.log("api server running at http://127.0.0.1:3007");
});
