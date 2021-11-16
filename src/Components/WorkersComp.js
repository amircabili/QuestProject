import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'
import utils from './utils'
import '../Css/App.css';

 function WorkersComp() {

  const [workers, setWorkers] = useState([{}]) 
  const [userId, setId] = useState(0);

   useEffect(async () =>
        {           
            let resp = await utils.getAllItems("https://interview-mock.herokuapp.com/api/workers/")
            let workersData = resp.data        
            setWorkers(workersData);  
                
        }, [])

        useEffect(async () =>
        {
           setId(userId);
           navigate('/flights/' + userId);
        }, [userId])
  
  
    const navigate =  useNavigate();

    return (<div>           
            {
                workers.map((item,index) =>
                    {
                        return <div >
                            <input key={index} type="button" className="bg-opacity-25 bg-primary btn btn-md   my-1 w-100" value={item.name} onClick={() => setId(item.id) } />  <br/>                                                        
                        </div>
                    })
                    }               
         </div>
      );
    }

export default  WorkersComp ;
