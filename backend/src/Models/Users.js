const mongoose = require('mongoose')
const validator = require('validator')


const usersSchema = new mongoose.Schema({
    access_code: {
        type: String,
        required: true,
        trim: true,
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is Invalid')
            }
        }
    },
    phone_number: {
        type: Number,
        required: true,
        trim: true
    },
    address: {
        address_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:'addresses'
        }
    },
    sections: {
        section_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:'sections'
        }
    }
})

//TODO: Comment the below, not needed, will un-comment if needed later
// usersSchema.virtual(['adresses', 'skills', 'workexperiences', 'education', 'sections', 'additionalskills'], {
//     ref: ['Addresses', 'Skills', 'WorkExperiences', 'Education', 'Sections', 'AdditionalSkills'],
//     localField: '_id',
//     foreignField: 'user_id'
// })

const Users = mongoose.model('users', usersSchema)
module.exports = Users
