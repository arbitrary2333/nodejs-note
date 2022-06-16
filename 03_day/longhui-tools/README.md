## 安装
```

npm install longhui-tools
```


## 导入
```js
// 调用dateFormat对时间进行格式化
const dtStr = longhui-tools.dateFormat(new Date())
// 结果 2022-04-03 17:20:58
console.log(dtStr)
```

## 转义 HTML 字符的函数
```js
const htmlstr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = longhuiTools.htmlEscape(htmlstr)
console.log(str)
```

## 待还原的 HTML 字符的函数
```js
const str2 = longhuiTools.htmlUnEscape(str)
console.log(str2)
```

## 开源协议
ISC