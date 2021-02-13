const mongoose=require('mongoose')

const PatientSchema=mongoose.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    ssn:{
        type:String
    },
    date_of_birth:{
        type:String
    },
    gender:{
        type:String
    }
})

const Patient=mongoose.model('Patient',PatientSchema)
module.exports=Patient;