const mongoose=require('mongoose')

const additionalSectionsSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Users'
    },
    additional_Section:[{
        title:{
            type:String,
            required:true,
            trim:true
        },
        list:[{
            type:String,
            required:true,
            trim:true
        }]
    }]
})


additionalSectionsSchema.virtual('sections',{
    ref:'Sections',
    localField:'_id',
    foreignField:'additional_sections_id'
})

const AdditionalSections=mongoose.Model('AdditionalSections',additionalSectionsSchema)
    

module.exports=AdditionalSections