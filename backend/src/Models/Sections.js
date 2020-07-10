const mongoose=require('mongoose')

const sectionSchema=new mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Users'
    },
    summary:{
        type:String,
        required:true,
        trim:true
    },
    education_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Education'
    },
    work_experiences_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'WorkExperience'
    },
    skills_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Skills'
    },
    additional_sections_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'AdditionalSections'
    }
})

sectionSchema.virtual({
    ref:'Users',
    localField:'_id',
    foreignField:'section_id'
})

const Sections= mongoose.Model('Sections',sectionSchema)

module.exports=Sections