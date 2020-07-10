const mongodb= require('mongodb')
const MongoClient= mongodb.MongoClient
const ObjectID=mongodb.ObjectID

const connectionURL='mongodb+srv://nanda:nanda@resumer.lixlr.mongodb.net/test?authSource=admin&replicaSet=atlas-shng1u-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true'
const databaseName='resumer'

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error,client) => {
    if(error){
        return console.log('Unable to connect to the database')
    }
    const db=client.db(databaseName)
})