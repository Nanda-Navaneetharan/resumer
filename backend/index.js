const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const mongoconnect = require('./src/db/mongoose')

app.use(express.json)

app.listen(port, () => {
    console.log('Server is running on ' + port)
})
mongoconnect()