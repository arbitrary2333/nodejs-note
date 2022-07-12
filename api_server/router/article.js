const express = require('express')

const router = express.Router()

const article_handler  = require('../router_handler/article')

const multer = require('multer')

const path = require('path')

const expressJoi = require('@escook/express-joi')

const { add_article_schema } = require('../schema/article')

// 创建 multer 的实例对象，通过 dest 属性指定文件的存放路径
const upload = multer({ dest: path.join(__dirname, '../uploads') })

// 发布新文章的路由
// upload.single() 是一个局部生效的中间件，用来解析 FormData 格式的表单数据
// 将文件类型的数据，解析并挂载到 req.file 属性中
// 将文本类型的数据，解析并挂载到 req.body 属性中
// 注意：在当前的路由中，先后使用了两个中间件：
//       先使用 multer 解析表单数据
//       再使用 expressJoi 对解析的表单数据进行验证
router.post('/add', upload.single('cover_img'),expressJoi(add_article_schema), article_handler.addArticle)

module.exports = router