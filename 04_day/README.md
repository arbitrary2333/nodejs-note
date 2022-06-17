# 模块的加载机制

## 1、优先从缓存中加载

​	模块在第一次加载后会被缓存，这也意味着多次调用require()不会导致模块的代码被执行多次

## 2、内置模块的加载机制

​	内置模块是由Node.js官方提供的，加载优先级最高

​	例如：require('fs')始终返回内置fs模块，即使在node_modules目录下有名字相同的包也叫做fs

## 3、自定义模块的加载顺序

​	使用require()加载自定义模块时，必须指定以./或../开头的路径标识符。在加载自定义模块时，如果没有这些标识符，则node会把它当作内置模块或第三方模块进行加载

​	使用require()导入自定义模块时，省略了文件的扩展名，则nodejs会分别尝试加载以下的文件：

1. 按照确切的文件名进行加载
2. 补全.js扩展名进行加载
3. 补全.json扩展名进行加载
4. 补全.node扩展名进行加载
5. 加载失败，终端报错

## 4、第三方模块的加载机制

​	require()一个第三方模块时，会从当前模块的目录开始。尝试从/node_modules文件夹中加载第三方模块。如果没有找到对应的模块，则移动到上一层父目录，进行加载，直到文件系统的根目录

## 5、目录作为模块

​	require()一个目录时，会查看被加载的目录下查找一个叫做package.json的文件，并寻找main属性，作为require()加载的入口，如果没有，则会加载目录下的index.js文件，如果还没有，则会在终端报错

# Express

## 1、什么是Express

​	官方概念：Express是基于Node.js平台，快速、开放、极简的Web开发框架	

​	通俗理解：Express的作用和Node.js内置的http模块类似，是专门用来创建Web服务器的

## 2、Express能做什么

​	使用Express，我们可以方便、快速的创建Web网站的服务器或API接口的服务器

## 3、Express基本使用

1. 监听GET请求：app.get(url, (req, res) => {})
2. 监听POST请求：app.post(url, (req, res) => {})
3. 把内容响应给客户端：res.send()
4. 获取URL中携带的查询参数：
   1. req.query：可以访问到客户端通过查询字符串的形式，发送到服务器的参数
   2. req.params：获取动态参数

## 4、托管静态资源

​	express提供了一个函数，叫做express.static()，通过它，我们可以非常方便地创建一个静态资源服务器，例如：通过如下代码可以将public目录下的图片、CSS文件、JS文件对外开放访问了

```
app.use(express.static('public'))
```

​	现在即可访问：http://localhost:3000/images/bg.jpg，http://localhost:3000/css/style.css，http://localhost:3000/js/login.js

### 	1、托管多个静态资源目录

​		如果要添加多个静态资源目录，请多次调用express.static()

​		访问静态资源文件时，express.static()函数会根据目录的添加顺序查找所需的文件

### 	2、挂在路径前缀

```
app.use('/abc', express.static('public'))
```

​		访问时：http://localhost:3000/abc/images/bg.jpg

## 5、nodemon

​	在我们编写调试nodejs项目时，需要频繁close项目，nodemon能监听项目变化，当代码修改后，nodemon会自动帮我们重启项目，极大方便开发和调试