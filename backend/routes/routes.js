
const express=require('express')
const router=express.Router()

const Vaccine=require('../models/vaccine')
const Patient = require('../models/patients')
const mongoose = require('mongoose')
const Allergies = require('../models/allergies')
const VaccinatedPatient=require('../models/vaccinatedPatient');


router.post('/patient',async(req,res)=>{
    try{
        const patient=new Patient(req.body);
        await patient.save();
        res.status(200).json({
            data:patient
        })
    }catch(e){
        res.status(500).json({
            data:e
        })
    }
})
router.get('/patients',async(req,res)=>{
    
    try{

        
        const data=await Patient.find({});
        const response={
            results:data
        }

        
        
        res.status(200).send(response)
    }catch(err){
        res.status(500).send(err)
    }
})

router.post('/allergies',async(req,res)=>{
    try{
        const id=req.body.id;
        const _id=mongoose.Schema.ObjectId(id);

        const allery=new Allergies({
            
            ...req.body,
            patient_id:id,
        })

        await allery.save();

        res.status(200).json({
            allery
        })
    }catch(err){
        res.status(500).json({
            data:err
        })
    }
})

router.get('/allergies/:id',async(req,res)=>{
    
    try{
        const id=req.params.id;
        

        const response = await Allergies.findOne({patient_id:id});
        

        
        
        
        res.send(response)
    }catch(err){
        res.send(err)
    }
})

router.get('/vaccineCount',async(req,res)=>{
    
    try{

        
        const count=await Vaccine.find({})
        
        
        res.send(count)
    }catch(err){
        res.send(err)
    }
})




router.put('/vaccineCount',async(req,res)=>{
    try{
        const result=await Vaccine.findOne({})
        result.count=result.count-1;
        result.save()
        res.send('Updated')
        
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.post('/checkPatient',async(req,res)=>{
    const id=req.body.id;

    try{
        const result=await VaccinatedPatient.findOne({patient_id:id})
        
        if(result){
            res.status(200).json({msg:'Already Vaccinated'})
        }

        res.status(200).json({msg:'Pending'})
    }catch(err){
        res.json({msg:'Error'})
    }
    
})

router.post('/addpatient',async(req,res)=>{

    try{
        const patient=new VaccinatedPatient(req.body)
        patient.save()

        res.status(200).json({msg:'Done'})
    }catch(err){
        res.json({msg:'Error'})
    }
    
})

module.exports=router;