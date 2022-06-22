## 8、中间件的分类

1. 应用级别的中间件

   ton通过app.use()或app.get()或app.post()，绑定到app实例上的中间件，叫做应用级别中间件

2. 路由级别的中间件

   绑定到express.Router()实例上的中间件

3. 错误级别的中间件

   作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题

   格式：function(err, req, res, next){}

4. Express内置的中间件

   自Express4.16.0版本开始，内置了3个常用的中间件

   - express.static快速托管静态资源的内置中间件（无兼容性）
   - express.json解析JSON格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）
   - express.urlencoded解析URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）

5. 第三方的中间件

   在express@4.16.0之前的版本中，经常使用body-parser这个第三方的中间件，来解析请求体数据

   express内置的express.urlencoded中间件，是基于body-parser这个第三方中间件衍生而来

## 9、自定义中间件

​	实现步骤：

- 定义中间件
- 监听req的data事件
- 监听req的end事件
- 使用querystring模块解析请求体的数据
- 将解析出来的数据对象挂载为req.body