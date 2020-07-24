const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const usersSchema = new mongoose.Schema({
    access_code: {
        type: String,
        required: true,
        trim: true,
        default: ""
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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'addresses'
    },
    sections: {
        section_id: {
            type: mongoose.Schema.Types.ObjectId,
            //required: true,
            ref: 'sections',
            default: null
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})

usersSchema.statics.findByCredentials = async (access_code) => {
    const user = await Users.findOne({ access_code: access_code })
    if (!user) {
        throw new Error('Unable to login')
    }
    return user
}

usersSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'resumer')
    user.token = user.tokens.concat({ token: token })
    await user.save()
    return token
}

//TODO: Comment the below, not needed, will un-comment if needed later
// usersSchema.virtual(['adresses', 'skills', 'workexperiences', 'education', 'sections', 'additionalskills'], {
//     ref: ['Addresses', 'Skills', 'WorkExperiences', 'Education', 'Sections', 'AdditionalSkills'],
//     localField: '_id',
//     foreignField: 'user_id'
// })

const Users = mongoose.model('users', usersSchema)
module.exports = Users
