import React,{ useState ,useContext,useEffect} from 'react';


import VaccineContext from '../../context/vaccine/vaccineContext';

const VaccineCount = () => {

    const vaccineContext=useContext(VaccineContext)
    vaccineContext.getVaccineCount()

    useEffect(()=>{

    },[vaccineContext.count])
    

    return (
        <nav class="navbar navbar-dark navbar-expand-lg  text-primary bg-dark portfolio-navbar gradient" style={{marginTop:'5rem'}}>
        <div class="container-fluid"><a class="navbar-brand logo" href="index.html">Immunization</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navbarNav"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse"
                id="navbarNav">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="index.html">Vaccines : </a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" style={{textColor:'white'}} href="projects-no-images.html">{vaccineContext.count}</a></li>
                    
                </ul>
            </div>
        </div>
    </nav>
    )
}


export default VaccineCount;