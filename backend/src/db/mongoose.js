const mongoose = require('mongoose')
const connectionURL = 'mongodb+srv://nanda:nanda@resumer.lixlr.mongodb.net/test?authSource=admin&replicaSet=atlas-shng1u-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    dbName:'resumer'
},(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("Connected to DB")
    }
})