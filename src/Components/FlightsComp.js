 
import {Route, Link, Routes, useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import utils from './utils'
import FlightDataComp from './FlightDataComp'
import '../Css/App.css';

 function FlightsComp(props) {

  const params = useParams();
  const [userId, setUserId] = useState()
  const [flightId, setFlightId] = useState()
  const [flights, setFlights] = useState([])
  const [timer, SetTimer] = useState([])
  const [ShowFlightData, setShowFlightData] = useState(false)
 
  useEffect( async () =>
  {                                               
          let userid = params.id;
          setUserId(userid);     
          let resp = await utils.getAllItems("https://interview-mock.herokuapp.com/api/workers/" + userid);
          let FlightsData = resp.data  
          SetTimer(timer+1);
          setFlights(FlightsData);    
          console.log('flights -' + flights);  

  }, [ params.id])


   useEffect(  () =>
        {           
            const intervalId = setInterval(async() => {                             
                let userid = params.id;
                setUserId(userid);     
                let resp = await utils.getAllItems("https://interview-mock.herokuapp.com/api/workers/" + userid);
                let FlightsData = resp.data  
                
                setFlights(FlightsData);    
                console.log('flights -' + flights);         
            }, 5000)
            ///this reloads the function every one minute ,and starts over on every change of worker(click on worker button restarts the timer too)
            return () => clearInterval(intervalId); //This is important

        }, [timer])
 
    useEffect(async () =>
        {
           console.log('flightId - ', flightId)      
          
            setShowFlightData(true)
           //navigate('/flights/' + userId);

        }, [flightId])
         

    return (<div>   
        <div className="row">
            <div className="col-sm-12 col-md-7  bg-light bg-opacity-25 local-min-height-500">
                    <table  className="table table-striped w-100 ">
                    <thead>
                        <tr>
                            <th>Flight Number</th>
                            <th>Origin</th>
                            <th>Origin Date</th>
                            <th>Destination</th>
                            <th>Destination Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        flights.map((item,index) =>
                        {
                            return <tr style={{cursor:"pointer"}} key={index}  onClick={() => setFlightId(item.num) }>
                                    <td>{item.num}</td>
                                    <td>{item.to}</td>
                                    <td>{item.from_date}</td>
                                    <td>{item.to_date}</td>
                                    <td>{item.duration}</td>
                                </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className="col-sm-12 col-md-5 bg-warning bg-opacity-25">
                {
                       ShowFlightData && <FlightDataComp userid={userId} flightid={flightId}   />
                }
            </div>
        </div>        
            
         </div>
      );
    }

export default  FlightsComp ;