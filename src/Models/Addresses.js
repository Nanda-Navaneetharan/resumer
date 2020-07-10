const mongoose=require('mongoose')

const addressSchema = mongoose.Schema({
    user_id:{
       type:mongoose.Schema.Types.ObjectId,
       required:true,
       ref:'Users'
    },
    house_number:{
        type:String,
        required:true,
        trim:true
    },
    street_name:{
        type:String,
        required:true,
        trim:true
    },
    locality:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    state:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    postal_code:{
        type:String,
        required:true,
        trim:true
    }
})

addressSchema.virtual({
    ref:'Users',
    localField:'_id',
    foreignField:'address_id'
})

const Addresses=new mongoose.Model('Adresses',addressSchema)

module.exports=Addresses