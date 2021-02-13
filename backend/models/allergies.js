const mongoose=require('mongoose')

const AllergiesSchema=mongoose.Schema({
    patient_id:{
        type:String
    },
    allergies:{
        type:String
    },
    reaction:{
        type:String
    },
    status:{
        type:String
        //active or inactive
    }
    
})

const Allergies=mongoose.model('Allergies',AllergiesSchema)
module.exports=Allergies;