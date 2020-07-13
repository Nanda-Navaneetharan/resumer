const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        //TODO: change ref to mongodb collection name and not filename      
        ref:'users'
    },
    summary:{
        type:String,
        required:true,
        trim:true
    },
    education_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        //TODO: change ref to mongodb collection name and not filename      
        ref:'education'
    },
    work_experiences_id: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        //TODO: change ref to mongodb collection name and not filename      
        ref:'workExperience'
    },
    skills_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        //TODO: change ref to mongodb collection name and not filename      
        ref:'skills'
    },
    //TODO: Change to array of additional_sections_id
    additional_sections_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        //TODO: change ref to mongodb collection name and not filename      
        ref:'additionalSections'
    }
})

//TODO: Comment the below, not needed, will un-comment if needed later
// sectionSchema.virtual({
//     ref: 'Users',
//     localField: '_id',
//     foreignField: 'section_id'
// })

const Sections = mongoose.Model('Sections', sectionSchema)

module.exports = Sections