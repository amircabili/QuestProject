import {Route, Link, Routes, useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Moment from 'react-moment';
import moment from 'moment';
import utils from './utils'
import '../Css/App.css';

function FlightDataComp(props) {

    const params = useParams();

    useEffect(async () =>
    {
        let userID  = params.id;
        let resp = await utils.getAllItems("https://interview-mock.herokuapp.com/api/workers/" + params.id)
        let flights = resp.data;        
        console.log('props.flightId -' + props.flightid);      
        let userFlight = flights.filter(x=>x.num == props.flightid)                        
        setFlights(userFlight);

    }, [props.flightid])

  return (<div>
    <br/> <br/> 
    <div className="local-min-height-500">
                  
                {
                        flights.map((item,index) =>
                        {
                            return <div  key={index}  >
                                         
                                        <div className="flightRow row border-end bg-secondary bg-opacity-10 w-100">
                                            <div className="col-sm-12 col-md-6">
                                                <span> <b> Plane Number</b></span>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                            <span>  {item.plane}</span>
                                            </div>
                                        </div>
                                        <div className="flightRow row border-end bg-secondary bg-opacity-10 w-100">
                                            <div className="col-sm-12 col-md-6">
                                                <span> <b> Duration</b></span>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                            <span>  {item.duration}</span>
                                            </div>
                                        </div>
                                        <div className="flightRow row border-end bg-secondary bg-opacity-10 w-100">
                                            <div className="col-sm-12 col-md-6">
                                                <span> <b>   Origin Gate</b></span>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                            <span>  {item.from_gate}</span>
                                            </div>
                                        </div>
                                        <div className="flightRow row border-end bg-secondary bg-opacity-10 w-100">
                                            <div className="col-sm-12 col-md-6">
                                                <span> <b>   Destination Gate</b></span>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                            <span>  {item.to_gate}</span>
                                            </div>
                                        </div>
                                    
                                    
                                </div>
                        })
                    }

            </div>

    <br/>  <br/> 
  </div>
  );
}

 

export default  FlightDataComp ;
