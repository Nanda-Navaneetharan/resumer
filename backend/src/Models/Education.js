const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
        default: ""
    },
    education_details: [{
        institute: {
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
        score: {
            type: String,
            required: true,
            trim: true,
            default: ""
        }
    }],
    default: [{}]
})

//TODO: Comment the below, not needed, will un-comment if needed later
// educationSchema.virtual({
//     ref: 'Sections',
//     localField: '_id',
//     foreignField: 'education_id'
// })

const Education = new mongoose.model('education', educationSchema)

module.exports = Education