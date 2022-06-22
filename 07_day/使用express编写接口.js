const express = require('express')

const app = express()

const cors = require('cors')

app.use(cors())

app.use(express.urlencoded({extended: false}))

const apiRouter = require('./apiRouter')

app.use('/api', apiRouter)

app.listen(80, () => {
    console.log("express server running http://127.0.0.1")
})