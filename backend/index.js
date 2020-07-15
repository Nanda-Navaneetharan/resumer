const express = require('express')
// const mongodb = require('./mongodb')
require("./src/db/mongoose")
const userRoute=require('./src/routers/users')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use("/users",userRoute)

app.listen(port, () => {
    console.log('Server is running on ' + port)
})