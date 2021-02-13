const mongoose=require('mongoose')

const vaccineSchema=mongoose.Schema({
    count:{
        type:Number
    }
})

const Vaccine=mongoose.model('Vaccine',vaccineSchema)
module.exports=Vaccine