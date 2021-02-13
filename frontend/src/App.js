import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import PatientList from './components/patients/PatientList'


import Navbar from './components/layout/Navbar'
import PatientDetail from './components/patients/PatientDetail';
import VaccineCount from './components/layout/VaccineCount';

import VaccineState from './context/vaccine/VaccineState'
import Home from './pages/Home';

function App() {
  return (
    <VaccineState>
    <Router>
      <div >
      
          <Navbar/>
          
          
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/patients" exact component={PatientList}/>
            <Route path="/patients/:id" exact component={PatientDetail}/>
          
          
          </Switch>
          
      </div>
    </Router>
    </VaccineState>
  );
}

export default App;
