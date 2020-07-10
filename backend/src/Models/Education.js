const mongoose=require('mongoose')

const educationSchema= new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Users'
    },
    Institute: {
        type:String,
        required:true,
        trim:true
    },
    from:{
        type: Date,
        required:true,
    },
    to:{
        type:Date,
        required:true
    },
    Score:{
        type:String,
        required:true,
        trim:true
    }
})

educationSchema.virtual({
    ref:'Sections',
    localField:'_id',
    foreignField:'education_id'
})

const Education=new mongoose.Model('Education',educationSchema)
module.exports= Education