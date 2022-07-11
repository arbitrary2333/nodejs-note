const express = require('express')

const router = express.Router()

const articate_handler = require('../router_handler/artcate')

router.get('/cates', articate_handler.getArticleCates)

module.exports = router