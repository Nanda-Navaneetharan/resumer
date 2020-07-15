const mongoose = require('mongoose')

const additionalSectionsSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'users'
    },
    title: {
        type:String,
        required:true,
        trim:true
    },
    list: [{
        type:String,
        required:true,
        trim:true
    }]
})

//TODO: Comment the below, not needed, will un-comment if needed later
// additionalSectionsSchema.virtual('sections', {
//     ref: 'Sections',
//     localField: '_id',
//     foreignField: 'additional_sections_id'
// })

const AdditionalSections = mongoose.Model('AdditionalSections', additionalSectionsSchema)

module.exports = AdditionalSections