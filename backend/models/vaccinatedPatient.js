const mongoose=require('mongoose')

const vaccinatedPatientSchema=mongoose.Schema({
    patient_id:{
        type:String
    },
    status:{
        type:String,
        default:false
    }
})

const VaccinatedPatient=mongoose.model('VaccinatedPatient',vaccinatedPatientSchema)
module.exports=VaccinatedPatient;