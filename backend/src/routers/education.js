const express = require('express')
const router = express.Router()
const Education = require('../Models/Education')
const Section = require('../Models/Sections')
require('../db/mongoose')

router.post("/", async (req, res) => {

    const user_id = req.user._id
    try {
        const education = await Education.updateOne({ _id: user_id }, {
            $set: {
                education_details: req.body.data.education_details
            }
        }, { upsert: true })

        if (education.upserted) {
            await Section.updateOne({ _id: user_id }, { $set: { education_id: education.upserted[0]._id } })
        }
        res.send(education)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})
/**
 * POST /address
 * Body: _id of the user (and other address details)
 * Action: Insert new education details if it does not exist or update existing (upsert)
 *
 */
module.exports = router