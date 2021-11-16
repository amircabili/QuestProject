 
import {Route, Link, Routes } from 'react-router-dom'
import WorkersComp from './WorkersComp'
import FlightsComp from './FlightsComp'
import '../Css/App.css';

 function MainComp(props) {
    return (<div>
              <div className="container-fluid bg-secondary bg-opacity-10">
                
                <div className="row">
                    <div className="col-sm-12 col-md-3 bg-info bg-opacity-25 left-panel border-end">
                       <div className="row bg-info mb-3">
                        <div className="col-sm-12 col-md-12">
                            <h1>Workers</h1> 
                        </div>
                    </div>
                        <WorkersComp />
                    </div>
                    <div className="col-sm-12 col-md-9 left-panel border-end">
                        <Routes>
                            <Route path="/" element={<FlightsComp user="12121212"/>} /> 
                            <Route path="/flights" element={<FlightsComp />} />
                            <Route path="/flights/:id" element={<FlightsComp />} />
                        </Routes>
                    </div>                    
                </div>
              </div>
         </div>
      );
    }

export default  MainComp ;