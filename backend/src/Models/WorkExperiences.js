const mongoose = require('mongoose')

const workExperiencesSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //TODO: change ref to mongodb collection name and not filename      
        ref: 'Users'
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    from: {
        type: Date,
        required: true
    },
    to: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
})

//TODO: Comment the below, not needed, will un-comment if needed later
workExperiencesSchema.virtual('workexperiences', {
    ref: 'Sections',
    localField: '_id',
    foreignField: 'work_experiences_id'
})
const Work_Experiences = new mongoose.Model('WorkExperiences', workExperiencesSchema)

module.exports = Work_Experiences