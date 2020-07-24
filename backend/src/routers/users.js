const express = require('express')
const router = express.Router()
const User = require('../Models/Users')
require('../db/mongoose')
const Address = require('../Models/Addresses')
const shortidgen = require('shortid')
const auth = require('../middleware/auth')

//Scenario for new user
router.get('/generateaccesscode', async (req, res) => {
    const access_code = shortidgen.generate()
    try {
        const user = await User.find({ access_code: access_code })
        if (user.length === 0) {
            return res.send(access_code)
        }
        else {
            return res.status(404).send("Please request again")
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send(err)
    }
})


//Scenario for existing user
router.post("/save", async (req, res) => {
    //Save the new data into the database
    //Always return _id of the user
    const user = new User(req.body)
    console.log(user)
    try {
        await user.save()
        const token = user.generateAuthToken()
        console.log(token)
        res.send(user)
    }
    catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.access_code)
        const token = await user.generateAuthToken()
        res.send({ user: user, token: token })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get("/", auth, async (req, res) => {
    /**
     * Find by id in users collections
     * Populate
     * 
     * User.find({_id:userId}).populate('address').populate()
     * Refer how to populate nested documents
     */
    const userId = req.user._id
    const user = await User.find({ _id: userId }).populate('address')
    res.json(user)

})


// router.post('/logout',auth,async (req,res) => {
//     try {
//         req.user.tokens=req.user.tokens.filter((token) => {
//             return token.token !== req.token
//         })
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// router.post('/newuser', async (req,res) => {
//     const user=new User(req.body)
//     user.access_code=shortidgen.generate()
//     console.log(user)
//     try {
//         await user.save()
//         const token=user.generateAuthToken()
//         console.log(token)
//         res.send(user)
//     } 
//     catch (error) {
//         res.status(400).send(error)
//         console.log(error)
//     }
// })
module.exports = router