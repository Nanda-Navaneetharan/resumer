const mongoose = require('mongoose')

const workExperiencesSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
        default: ""
    },
    work_experience_details: [{
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
        roles: [{
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
        }],
        projects: [{
            project_name: {
                type: String,
                required: true,
                trim: true,
                default: ""
            },
            project_description: {
                type: String,
                required: true,
                trim: true,
                default: ""
            }
        }]
    }],
    default: [{}]
})

//TODO: Comment the below, not needed, will un-comment if needed later
// workExperiencesSchema.virtual('workexperiences', {
//     ref: 'Sections',
//     localField: '_id',
//     foreignField: 'work_experiences_id'
// })
const Work_Experiences = new mongoose.model('WorkExperiences', workExperiencesSchema)

module.exports = Work_Experiences