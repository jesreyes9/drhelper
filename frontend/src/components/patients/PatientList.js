import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './patients.css';
import VaccineCount from '../layout/VaccineCount'

const PatientList = () => {

    const [loading,setLoading]=useState(true)
    const [data,setData]=useState([])
    const [allergy,setAllergy]=useState([])

    useEffect(()=>{
        axios.get('https://hackathonproject.herokuapp.com/patients').then((res)=>{
            
            setData(res.data.results)
            setLoading(false)
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })

        axios.get('https://hackathonproject.herokuapp.com/allergies').then((res)=>{
            setAllergy(res.data.results)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return loading? (
        
        <section id="services" className="services" style={{margin:'auto',alignContent:'center'}}>
        <VaccineCount/>
      <div className="container">
        <div className="spinner-border" role="status" >
            <span className="sr-only">Loading...</span>
        </div>
        </div>
        </section>
    ):(
        <section id="services" className="services" style={{marginTop:'1rem'}}>
      <div className="container">
      <VaccineCount/>

        <div className="section-title" style={{marginTop:'20px'}}>
          <h2>Patients</h2>
          
        </div>

        <div className="row">
        {
            data.map((pat)=>{
                return(
                    <div className="col-md-6" key={pat.id}>
                        <div className="icon-box">
                        <i className="fa fa-user-circle"></i>
                        <h4><Link to={{
                            pathname:`/patients/${pat._id}`,
                            data:pat,
                            allergy:allergy
                        }}>{pat.first_name}{' '}{pat.last_name}</Link></h4>
                        <p>DOB : {pat.date_of_birth}</p>
                        <p>Gender : {pat.gender}</p>
                        </div>
                    </div>
                )
            })
        }
          
          
         
          
          
          
        </div>

      </div>
    </section>
    )
}

export default PatientList;
