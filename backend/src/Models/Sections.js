const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
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
        ref:'education'
    },
    work_experiences_id: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'workExperience'
    },
    skills_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'skills'
    },
    additional_sections_id:[{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'additionalSections'
    }]
})

//TODO: Comment the below, not needed, will un-comment if needed later
// sectionSchema.virtual({
//     ref: 'Users',
//     localField: '_id',
//     foreignField: 'section_id'
// })

const Sections = mongoose.Model('Sections', sectionSchema)

module.exports = Sections