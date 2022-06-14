# path路径模块

## 1、什么是path路径模块

path模块是nodejs官方提供的，用来处理路径的模块

- path.join()方法，用来将多个路径片段拼接成一个完整的路径字符串

  - ```js
    const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
    console.log(pathStr)   // 输出 \a\b\d\e   ../ 会抵消路径
    const pathStr = path.join(__dirname, './files/1.txt')
    console.log(pathStr)   // 输出 当前文件所在目录\files\1.txt
    ```

- path.basename()方法，用来从路径字符串中，将文件名解析出来

  - ```js
    const fpath = '/a/b/c/index.html'
    var fullName = path.basename(fpath)
    console.log(fullName)  //  输出 index.html
    var nameWithoutExt = path.basename(fpath, '.html')
    console.log(nameWithoutExt)  //  输出 index
    ```

- path.extname()方法，可以获取路径中的扩展名部分

  - ```js
    const fpath = '/a/b/c/index.html'
    const fext = path.extname(fpath)
    console.log(fext)  //  输出 .html
    ```

# http模块

## 1、什么是http模块

回顾：在网络节点中，负责消耗资源的电脑叫做客户端，负责对外提供网络资源的电脑叫做服务器

http模块是nodejs官方提供的，用来创建web服务器的模块

## 2、进一步理解http模块作用

服务器和普通电脑区别：服务器上安装了web服务器软件，例如：IIS，Apache等

在nodejs中，我们不需要使用IIS，Apache等这些第三方服务器软件，因为我们可以基于nodejs提供的http模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供web服务

## 3、服务器相关概念

### 	1、IP地址

​		每台计算机的唯一地址，互联网中每台web服务器都有自己的IP地址，例如：大家可以在windows终端中运行ping www.xxx.com 命令，即可查看到该网站的IP地址

### 	2、域名和域名服务器

​		域名服务器就是提供IP地址和域名之间的转换服务的服务器

### 	3、端口号

​		在一台电脑，可以运行成百上千的web服务，每个服务都对应一个端口号，客户端发送过来的网络请求，通过端口号可以准确地交给对应的web服务进行处理

![1655185845949](C:\Users\86180\AppData\Roaming\Typora\typora-user-images\1655185845949.png)

## 4、创建基本的web服务器

- 导入http模块

- 创建web服务器实例

- 为服务器实例绑定request事件，监听客户端请求

  - ```
    const server = http.createServer()
    server.on('request', (req, res) => {
    	res.end(xxx)  //响应客户端
    })  //req为客户端相关的数据或属性，res为服务端相关数据或属性
    ```

- 启动服务器

  - ```
    server.listen(80, () => {
        console.log('server running http://127.0.0.1')
    })
    ```

中文乱码问题

```
res.setHeader('Content-Type', 'text/html; charset=utf-8')
```

# 模块化

## 1、什么是模块化

模块化是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程，对于整个系统来说，模块是可组合分解和更换的单元

模块化就是遵守固定的规则，把一个大文件拆分成独立并互相依赖的多个小模块

好处：

- 提高代码复用性
- 提高代码的可维护性
- 可以实现按需加载

## 2、nodejs中模块的分类

- 内置模块（由nodejs官方提供，例如：fs，path，http等）
- 自定义模块（用户创建的每个js文件）、
- 第三方模块

## 3、加载模块

使用require()方法，可以加载内置模块、自定义模块与第三方模块

注意：使用require时，会执行被加载的模块

## 4、模块作用域

和函数作用域相似，在自定义模块中定义的变量方法等只能在当前模块内被访问

好处：防止了全局变量污染的问题

## 5、向外共享模块作用域中的成员

### 	1、module.exports对象

### 	2、exports对象

​		exports与module.exports指向的是同一个对象

注意：export === module.exports