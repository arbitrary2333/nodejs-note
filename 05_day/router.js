const express = require('express')

const router = express.Router()

router.get('/user', (req, res) => {
    res.send('this is GET request')
})

router.post('/user/add', (req, res) => {
    res.send('this is POST request')
})

module.exports = router