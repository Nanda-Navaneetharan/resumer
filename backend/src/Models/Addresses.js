const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
        default: ""
    },
    house_number: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    street_name: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    locality: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    city: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    state: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    country: {
        type: String,
        required: true,
        trim: true,
        default: ""
    },
    postal_code: {
        type: String,
        required: true,
        trim: true,
        default: ""
    }
})

//TODO: Comment the below, not needed, will un-comment if needed later
// addressSchema.virtual({
//     ref: 'Users',
//     localField: '_id',
//     foreignField: 'address_id'
// })

const Addresses = new mongoose.model('addresses', addressSchema, 'addresses')

module.exports = Addresses