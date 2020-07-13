const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //TODO: change ref to mongodb collection name and not filename      
        ref:'users'
    },
    //TODO: field name must be lowercase      
    Institute:{
        type:String,
        required:true,
        trim:true
    },
    from:{
        type:Date,
        required:true,
    },
    to:{
        type:Date,
        required:true
    },
    //TODO: field name must be lowercase      
    Score:{
        type:String,
        required:true,
        trim:true
    }
})

//TODO: Comment the below, not needed, will un-comment if needed later
// educationSchema.virtual({
//     ref: 'Sections',
//     localField: '_id',
//     foreignField: 'education_id'
// })

const Education = new mongoose.Model('Education', educationSchema)
module.exports = Education