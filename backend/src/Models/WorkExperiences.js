const mongoose = require('mongoose')

const workExperiencesSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
        default: ""
    },
    company: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    from: {
        type: Date,
        required: true,
        default: ""
    },
    to: {
        type: Date,
        required: true,
        default: ""
    },
    role: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    description: {
        type: String,
        required: true,
        trim: true,
        default: ""
    }
})

//TODO: Comment the below, not needed, will un-comment if needed later
// workExperiencesSchema.virtual('workexperiences', {
//     ref: 'Sections',
//     localField: '_id',
//     foreignField: 'work_experiences_id'
// })
const Work_Experiences = new mongoose.Model('WorkExperiences', workExperiencesSchema)

module.exports = Work_Experiences