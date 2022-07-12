const express = require('express')

const router = express.Router()

const expressJoi = require('@escook/express-joi')

const { add_cate_schema, delete_cate_schema, get_cate_schema, update_cate_schema } = require('../schema/artcate')

const artcate_handler = require('../router_handler/artcate')

router.get('/cates', artcate_handler.getArticleCates)

router.post('/addCate', expressJoi(add_cate_schema), artcate_handler.addArticleCates)

router.get('/deletecate/:id', expressJoi(delete_cate_schema), artcate_handler.deleteCateById)

router.get('/cates/:id',expressJoi(get_cate_schema) , artcate_handler.getArtCateById)

router.post('/updatecate', expressJoi(update_cate_schema), artcate_handler.updateCateById)

module.exports = router