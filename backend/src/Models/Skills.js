const mongoose = require('mongoose')


const skillsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //TODO: change ref to mongodb collection name and not filename      
        ref: 'Users'
    },
    //TODO: change field name to plural as it is an array of skills
    skill: [{
        skill_desc: {
            type: String,
            required: true,
            trim: true
        },
        rating: {
            type: Number,
            min: 0,
            max: 5
        }
    }]
})

//TODO: Comment the below, not needed, will un-comment if needed later
skillsSchema.virtual({
    ref: 'Sections',
    localField: '_id',
    foreignField: 'skills_id'
})

const Skills = new mongoose.Model('skills', skillsSchema)
module.exports = Skills