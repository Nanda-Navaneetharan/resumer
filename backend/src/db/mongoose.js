const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nanda:nanda@resumer.lixlr.mongodb.net/test?authSource=admin&replicaSet=atlas-shng1u-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true/resumer', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})