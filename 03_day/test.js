const longhuiTools = require('./longhui-tools')

const htmlstr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = longhuiTools.htmlEscape(htmlstr)
// console.log(str)

const str2 = longhuiTools.htmlUnEscape(str)
console.log(str2)