import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-dark navbar-expand-lg fixed-top text-primary bg-dark portfolio-navbar gradient">
            <div class="container-fluid"><a class="navbar-brand logo" href="/">Immunization</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navbarNav"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse"
                    id="navbarNav">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item" role="presentation"><Link class="nav-link" to="/">Home</Link></li>
                        <li class="nav-item" role="presentation"><Link class="nav-link" to="/patients">Patients</Link></li>
                        
                        
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}


export default Navbar;