const mongoose = require('mongoose')

const additionalSectionsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //TODO: change ref to mongodb collection name and not filename      
        ref: 'Users'
    },
    //TODO: additional_Section will not be an array
    //Sample data(document) for additional_section
    // {
    //     user_id:ObjectId("sere778wer9wer7wer9w"),
    //     title:"Hobbies",
    //     list:["Playing the guitar","Reading novels"]     
    // }
    //CHANGE ACCORDINGLY !
    additional_Section: [{
        title: {
            type: String,
            required: true,
            trim: true
        },
        list: [{
            type: String,
            required: true,
            trim: true
        }]
    }]
})


additionalSectionsSchema.virtual('sections', {
    ref: 'Sections',
    localField: '_id',
    foreignField: 'additional_sections_id'
})

const AdditionalSections = mongoose.Model('AdditionalSections', additionalSectionsSchema)


module.exports = AdditionalSections