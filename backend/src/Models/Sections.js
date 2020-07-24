const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
        default: ""
    },
    summary: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    education_id: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'education',
        default: ""
    }],
    work_experiences_id: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'workExperience',
        default: ""
    }],
    skills_id: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'skills',
        default: ""
    }],
    additional_sections_id: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'additionalSections',
        default: ""
    }]
})

//TODO: Comment the below, not needed, will un-comment if needed later
// sectionSchema.virtual({
//     ref: 'Users',
//     localField: '_id',
//     foreignField: 'section_id'
// })

const Sections = mongoose.model('Sections', sectionSchema)

module.exports = Sections