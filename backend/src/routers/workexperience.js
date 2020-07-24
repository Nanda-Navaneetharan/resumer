const express = require('express')
const router = express.Router()
require('../db/mongoose')
const Work_Experience = require('../Models/WorkExperiences')
const Section = require('../Models/Sections')


router.post('/', async (req, res) => {

    const user_id = req.user._id
    try {
        const work_Experience = await Work_Experience.updateOne({ _id: user_id }, {
            $set: {
                work_experience_details: req.body.data.work_experience_details
            }
        }, { upsert: true })

        if (work_Experience.upserted) {
            await Section.updateOne({ _id: user_id }, { $set: { work_experience_id: work_Experience.upserted[0]._id } })
        }
        res.send(work_Experience)
    } catch (error) {
        res.status(500).send(error)
    }
})




module.exports = router