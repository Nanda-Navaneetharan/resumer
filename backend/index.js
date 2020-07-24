const express = require('express')
// const mongodb = require('./mongodb')
require("./src/db/mongoose")
const userRoute = require('./src/routers/users')
const addressRoute = require('./src/routers/address')
const educationRoute = require('./src/routers/education')
const auth = require('./src/middleware/auth')
const workExperienceRoute = require('./src/routers/workexperience')


const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use("/users", userRoute)
app.use("/address", auth, addressRoute)
app.use("/education", auth, educationRoute)
app.use("/workexperience", auth, workExperienceRoute)

app.listen(port, () => {
    console.log('Server is running on ' + port)
})