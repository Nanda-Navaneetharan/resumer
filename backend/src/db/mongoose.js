const mongoose = require('mongoose')

const mongoconnect = () => {
    mongoose.connect('mongodb+srv://nanda:nanda@resumer.lixlr.mongodb.net/test?authSource=admin&replicaSet=atlas-shng1u-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true/resumer', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    }, err => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Connected to Mongodb atlas")
        }
    })
}

module.exports = mongoconnect