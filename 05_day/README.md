## 6、路由

### 	1、初识Express路由

​		在Express中，路由指的是，客户端的请求与服务器处理函数之间的映射关系

​		Express中的路由分为3部分组成，分别是请求类型、请求的url、处理函数

​		路由匹配过程：

​			每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功了，才会调用对应的处理函数

​		![1655716536920](C:\Users\86180\AppData\Roaming\Typora\typora-user-images\1655716536920.png)

### 	2、模块化路由

​		步骤：

1. 创建路由模块对应js文件

2. 调用express.Router()函数创建路由对象

3. 向路由对象上挂载

4. 使用module.exports向外共享路由对象

5. 使用app.use()函数注册路由模块

   ### 3、为路由模块添加前缀

   ​	`app.use('./api', userRouter)`

   ​	注意：app.use()函数的作用，就是用来注册全局中间件

## 7、Express中间件

​	在一个请求到达Express的服务器后，可以连续调用多个中间件，从而对这次请求进行预处理

![1655718402937](C:\Users\86180\AppData\Roaming\Typora\typora-user-images\1655718402937.png)

### 	1、Express中间件的格式

​			Express的中间件，本质上就是一个function处理函数：

```js
app.get('/', function(req, res, next){
	next()
})
```

​			next函数是实现多个中间件连续调用的关键，他表示把流转关系转交给下一个中间件和路由

​			注意：中间件函数的参数列表中，必须包含next参数，而路由处理函数中只包含req，res

### 	2、中间件的作用

​			多个中间件之间，共享同一份req和res，基于这个特性，我们可以在上游中间件中，统一为req和res对象添加自定义属性或方法，供下游中间件或路由使用

​			![1655719542077](C:\Users\86180\AppData\Roaming\Typora\typora-user-images\1655719542077.png)

### 	3、局部生效中间件		

```js
const mv = (req, res, next) => {
    console.log('这是最简单的中间件函数')
    next()
}

// 路由中第二个参数加上则为：调用路由“/”时，执行mv这个中间件（局部生效中间件）
app.get('/', mv, (req, res) => {
    res.send('Home page.')
})

// 定义多个局部中间件
app.get('/', [mw1, mw2,...], (req, res) => {})
app.get('/', mw1, mw2,..., (req, res) => {})
```

### 	4、注意事项：

1. 一定要在路由之前注册中间件
2. 客户端发送过来的请求可以连续调用多个中间件进行处理
3. 执行完中间件业务代码之后，不要忘记调用next()函数
4. next()之后不能再写额外代码
5. 连续调用多个中间件时，多个中间件之间共享req和res对象