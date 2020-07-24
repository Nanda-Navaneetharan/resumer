const express = require('express')
const router = express.Router()
const User = require('../Models/Users')
require('../db/mongoose')
const Address = require('../Models/Addresses')

router.post("/", async (req, res) => {
    const user_id = req.user._id
    console.log(user_id)
    //const address=new Address(req.body)
    try {

        const address = await Address.updateOne({ _id: user_id }, {
            $set: {
                house_number: req.body.data.house_number,
                street_name: req.body.data.street_name,
                locality: req.body.data.locality,
                city: req.body.data.city,
                state: req.body.data.state,
                country: req.body.data.country,
                postal_code: req.body.data.postal_code
            }
        }, { upsert: true })

        if (address.upserted) {
            await User.updateOne({ _id: user_id }, { $set: { address: address.upserted[0]._id } })
        }
        res.send(address)

    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})
/**
 * POST /address
 * Body: _id of the user (and other address details)
 * Action: Insert new address details if it does not exist or update existing (upsert)
 *         Check in users' collection if address field is empty, if so assign the new address' _id value to user's address field
 */

/**
 * AddressModel.updateOne({_id:req.body.data.user_id},{$set:{field1:value1}},{upsert:true})
 */

module.exports = router