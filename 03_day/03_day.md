# NPM与包

## 1、包

### 	1、从哪里下载包：

​		全球最大的包共享平台：https://www.npmjs.com/

### 	2、初次安装后多了哪些文件

​		node_module文件夹用来存放所有已安装到项目中的包，

​		package-lock.json配置文件用来记录node_module目录下的每一个包的下载信息，包括包的名字、版本号、下载地址等

### 	3、安装指定版本的包

​		默认情况下会安装最新的包，如要指定版本则需要，`npm install moment@2.22.2`

### 	4、包的语义化版本规范

​		例如：2.24.0

​		第一位数字：大版本

​		第二位数字：功能版本

​		第三位数字：Bug修复版本

### 	5、快速创建package.json	

```
// 作用：在执行命令所处的目录中，快速新建package.json文件
npm init -y
```

​		注意：上述命令只能在英文目录下成功运行，所以项目文件夹的名称一定要使用英文命名，不要					使用中文，不能有空格

### 	6、dependencies节点

​		作用：专门用来记录使用`npm install`命令安装了哪些包

### 	7、卸载包

​		npm uninstall moment，同时从package.json中的dependencies中移除

### 	8、devDependencies节点

​		如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到devDenpendencies节点中，如果在开发和项目上线后都会用到，则安装到dependencies节点中

```
// 安装指定包，并记录到devDependencies节点中
npm i 包名 -D
// 注意：上述命令是简写形式，等价于下方
npm install 包名 --save-dev
```

### 	9、包的分类

- 项目包：被安装到node_modules目录中的包，都是项目包

- 全局包：被安装到本机：C:\Users\用户目录\AppData\Roaming\npm\node_module 目录下的包为全局包：`npm install -g`

  扩展：i5ting_toc包，可将md文档转换为html文件

## 10、开发属于自己的包

### 	1、初始化包的基本结构：

- package.json（配置文件）

- index.js（入口文件）

- README.md（说明文档）

  - 文档中通常包含安装方式、导入方式、功能介绍、开源协议

###   2、注册NPM账号

###   3、登录npm账号

`npm login`命令，依次输入账号密码邮箱，密码属于盲打

注意：在运行npm login之前必须先把包的服务器切换为npm的官方服务器，否则会导致发布包失败（借用命令：nrm ls，nrm use npm）

###   4、发布

切换到包的根目录，使用命令`npm publish`，注意：包名不能重复

###   5、删除包

`npm unpublish 包名 --force`