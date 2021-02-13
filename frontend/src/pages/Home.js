import React from 'react';
import './home.css'

const Home = () => {
    return (
        <div>
        <section id="hero" class="d-flex align-items-center">

      <div style={{margin:'25px'}}>
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>USA Covid 19 Vaccination Program</h1>
          <h2></h2>
          <div class="d-lg-flex">
            
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="https://i.ibb.co/QDJKtfM/2.png" class="img-fluid animated" alt=""/>
          
        </div>
      
    </div>
    </div>

  </section>
        
    
      <main id="main">
      <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Features and Uses</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
              Unified Vaccine Management and Patient Management System
            </p>
            <ul>
              <li><i class="fa fa-check"></i> Managing Patient Records</li>
              <li><i class="fa fa-check"></i> Centralized Vaccine count and availability Management</li>
              <li><i class="fa fa-check"></i> Allergy and safety information for Patients</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              COVID-19 - Vaccination drive Management system.
            </p>
            <a href="#" class="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
    
        
    
      
    
        
        <section id="faq" class="faq section-bg">
          <div class="container">
    
            <div class="section-title" data-aos="fade-up">
              <h2>F.A.Q</h2>
              <p>Frequently Asked Questions - source : FDA</p>
            </div>
    
            <ul class="faq-list">
    
              <li data-aos="fade-up" data-aos-delay="100">
                <a data-toggle="collapse" class="" href="#faq1">Q: What is the FDA’s role in approving vaccines and what is being done to produce a COVID-19 vaccine?<i class="icofont-simple-up"></i></a>
                <div id="faq1" class="collapse show" data-parent=".faq-list">
                  <p>
                    
                  A: The FDA regulates vaccines. Vaccines undergo a rigorous review of laboratory, clinical, and manufacturing data to ensure the safety and effectiveness of these products. Vaccines approved for marketing may also be required to undergo additional studies to further evaluate the vaccine and often to address specific questions about the vaccine's safety, effectiveness, or possible side effects. 

                  On December 11, 2020, the FDA issued an Emergency Use Authorization (EUA) for the use of the Pfizer-BioNTech COVID-19 Vaccine. On December 18, 2020, the FDA issued an EUA for the use of the Moderna COVID-19 Vaccine. The issuance of an EUA is different than an FDA approval (licensure) of a vaccine.
                  
                  In determining whether to issue an EUA for a product, the FDA evaluates the available evidence and assesses any known or potential risks and any known or potential benefits. And if the benefit-risk assessment is favorable, the product is made available during the public health emergency. Once a manufacturer submits an EUA request for a COVID-19 vaccine, the FDA then evaluates the request and determines whether the relevant statutory criteria are met, taking into account the totality of the scientific evidence about the vaccine that is available to the agency.
                  
                  In addition to supporting product development for high priority COVID-19 vaccines, the FDA continues to expedite clinical trials for additional vaccine candidates, providing timely advice to and interactions with vaccine developers.
                  </p>
                </div>
              </li>
    
              <li data-aos="fade-up" data-aos-delay="200">
                <a data-toggle="collapse" href="#faq2" class="collapsed">Is it safe to take the Vaccine?<i class="icofont-simple-up"></i></a>
                <div id="faq2" class="collapse" data-parent=".faq-list">
                  <p>
                  Vaccination for COVID-19 is Completey safe.FDA has closely observed and approved for the public keeping in mind the safety of the Vaccine.
                  </p>
                </div>
              </li>
    
              <li data-aos="fade-up" data-aos-delay="300">
                <a data-toggle="collapse" href="#faq3" class="collapsed">Q: Are there any vaccines or other medical products available to prevent COVID-19? <i class="icofont-simple-up"></i></a>
                <div id="faq3" class="collapse" data-parent=".faq-list">
                  <p>
                  A: Yes. On December 11, 2020 the FDA issued the first Emergency Use Authorization for a COVID-19 vaccine, and on December 18, 2020, authorized a second COVID-19 vaccine. 

                  Additionally, the FDA is working with other vaccine developers, researchers, and manufacturers to help expedite the development and availability of medical products such as additional vaccines, monoclonal antibodies, and other drugs to prevent or treat COVID-19.
                  
                  Read more about what the FDA is doing to mitigate the effects of COVID-19.
                  
                  For information about vaccine clinical trials for COVID-19 visit clinicaltrials.gov and the COVID-19 Prevention NetworkExternal Link Disclaimer. Note: The information on clinicaltrials.gov is provided by the sponsor or principal investigator of a clinical trial. The listing of a study on the site does not reflect evaluation or endorsement of the trial by the Federal government.
                  </p>
                </div>
              </li>
    
              
              
    
            </ul>
    
          </div>
        </section>
        
    
        
        
    
        
        
    
      </main>
        
        
        </div>
    )
}

export default Home;
