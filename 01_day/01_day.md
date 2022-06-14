# 初始Node.js

## 1、什么是Node.js

Node.js是一个基于Chrome V8引擎的JavaScript运行环境

（运行环境：浏览器、Node.js）

## 2、Node.js中的JavaScript运行环境

![1655029903503](C:\Users\86180\AppData\Roaming\Typora\typora-user-images\1655029903503.png)

注意：

1. 浏览器是JavaScript的前端运行环境
2. Node.js是JavaScript的后端运行环境
3. Node.js中无法调用DOM和BOM等浏览器内置API

## 3、浏览器中的JavaScript运行环境

![1655030669076](C:\Users\86180\AppData\Roaming\Typora\typora-user-images\1655030669076.png)

总结：

1. V8引擎负责解析和执行JavaScript代码
2. 内置API是由运行环境提供的特殊接口，只能在所属的运行环境中被调用

## 4、终端常用快捷键

1. 使用 ↑ 键，快速定位上一次执行的命令
2. 使用tab键，快速补全路径
3. 使用esc键，快速清空当前已输入命令
4. 输入cls命令，可以清空终端



# fs文件系统模块

## 1、什么是fs文件系统模块

fs模块是Node.js官方提供的、用来操作文件的模块。他提供一系列方法和属性，用来满足用户对文件的操作需求

例如：

- fs.readFile()方法，读取指定文件中的内容
- fs.writeFile()方法，向指定文件中写入内容

如果在JavaScript中使用fs模块文件，则需要先导入：

```js
const fs = require('fs')
```

## 2、读取指定文件中的内容

### fs.readFile()的语法格式

```js
fs.readFile(path[, options], callback)
```

参数解读：

- 参数1：表示文件的路径（必选）
- 参数2：编码格式
- 参数3：文件读取完成后，通过回调函数拿到读取的结果，回调接收两个参数err和data（必选）
  - 读取成功，err为null（可用来判断文件是否读取成功）
  - 读取失败，err为错误对象，data为undefined

## 3、向指定文件中写入内容

### fs.writeFile()的语法格式

```
fs.writeFile(file, data[, options], callback)
```

参数解读：

- 参数1：表示文件的存放路径（必选）
- 参数2：表示要写入的内容（必选）
- 参数3：表示以什么格式写入文件内容，默认值是utf8
- 参数4：文件写入完成的回调（必选）
  - 写入成功：err为null
  - 写入失败：err为错误对象

注意：

- fs.writeFile()方法只能用来创建文件，不能用来创建路径
- 重复调用fs.writeFile()写入同一个文件，新内容会覆盖旧内容

## 4、路径拼接问题

在使用fs模块操作文件时，如果提供的操作路径是以./或../开头的相对路径时，很容易出现路径拼接错误的问题

原因：代码在运行的时候，会以执行node命令时所处的目录，动态拼接出被操作文件的完整路径

解决方案：

1. 在操作文件时，直接提供完整的路径，不要提供./或../，缺点：移植性差，不利于维护![1655037171548](C:\Users\86180\AppData\Roaming\Typora\typora-user-images\1655037171548.png)
2. 使用__dirname，表示当前文件所处的目录