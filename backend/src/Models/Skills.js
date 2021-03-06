const mongoose = require('mongoose')


const skillsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
        default: ""
    },
    skills: [{
        skill_desc: {
            type: String,
            required: true,
            trim: true,
            default: ""
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: ""
        }
    }]
})

//TODO: Comment the below, not needed, will un-comment if needed later
// skillsSchema.virtual({
//     ref: 'Sections',
//     localField: '_id',
//     foreignField: 'skills_id'
// })

const Skills = new mongoose.Model('skills', skillsSchema)
module.exports = Skills