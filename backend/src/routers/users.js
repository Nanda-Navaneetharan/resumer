const express=require('express')
const router= express.Router()
const User=require('../Models/Users')
require('../db/mongoose')
const Address=require('../Models/Addresses')
const shortidgen=require('shortid')

// router.post('/', async (req,res) => {
//     const user=new User(req.body);
    
//     //user.access_code=shortidgen.generate()
    
//     try {
//         await user.save()
//         res.status(201).send(user)

//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.post('/address', async (req,res) => {
//     const address=new Address(req.body);
    
//     //user.access_code=shortidgen.generate()
    
//     try {
//         await address.save()
//         res.status(201).send(address)

//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

router.get('/generateaccesscode', async (req,res)=> {
    const access_code=shortidgen.generate()
    try {
        const user=await User.find({access_code:access_code})
        console.log(user)
        if(user.length === 0){
            return res.send(access_code)
        }
        else{
            return res.status(404).send("Please request again")
        }
    } 
    catch (error) {
        console.log(error)
        res.status(500).send(err)
    }
})

module.exports=router