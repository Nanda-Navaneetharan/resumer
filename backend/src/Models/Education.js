const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'users'
    },
    institute:{
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
    score:{
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