### 7、编写接口-解决跨域问题

- CORS（推荐使用）

  - CORS由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源

  - ![1655892099935](C:\Users\86180\AppData\Roaming\Typora\typora-user-images\1655892099935.png)

  - CORS响应头部：Access-Control-Allow-Origin（origin参数的值指定了允许访问该资源的外域URL），如果指定了通配符*则表示允许任何域的请求

    ```js
    res.setHeader('Access-Control-Allow-Origin', 'http://www.xxx.com')
    ```

  - CORS响应头部：Access-Control-Allow-Headers，默认情况下仅支持客户端向服务端发送9个请求头，如果要发送额外请求头信息，则需要服务端对额外的请求头声明

    ```js
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', X-Custom-Header)
    ```

  - CORS响应头部：Access-Control-Allow-Methods，默认情况下CORS仅支持客户端发起的GET，POST，HEAD请求

    如果客户端希望通过PUT、DELETE等方式请求服务器的资源，则需要在服务端指明实际请求所允许使用的HTTP方法

    ```js
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD')
    ```

  - CORS请求分类：

    - 简单请求：请求方式为GET,POST,HEAD三者之一；HTTP头部信息不包括以下字段，无自定义头部字段（只发生一次请求）

    - 预检请求：GET,POST,HEAD之外的请求METHOD类型；请求头中有自定义头部字段；向服务器发送了application/json格式的数据（发生两次）

      （在浏览器与服务器正是通信之前，浏览器会先发送OPTION预检请求，以获知服务器是否允许该实际请求，所以这一次的OPTION请求称为“预检请求”，服务器成功响应预检请求后，才会发送真正的请求，并携带真实数据）

- JSONP（只支持GET请求）

  - 概念：浏览器端通过<script>标签的src属性，请求服务器上的数据，同时，服务器返回一个函数的调用，这种请求数据的方式叫做JSONP

  - 特点：

    - 不属于AJAX请求，因为他没有使用XMLHttpRequest这个对象
    - 仅支持GET请求

  - JSONP实现：

    - 接口：

      ![1655898597607](C:\Users\86180\AppData\Roaming\Typora\typora-user-images\1655898597607.png)

    - 客户端：

      ![1655898632789](C:\Users\86180\AppData\Roaming\Typora\typora-user-images\1655898632789.png)

