const express = require("express");
// 创建路由对象
const router = express.Router();

// 导入用户路由处理函数的模块
const userHandler = require('../router_handler/user')

// 注册新用户
router.post("/register", userHandler.register);

// 登录
router.post("/login", userHandler.login);

module.exports = router