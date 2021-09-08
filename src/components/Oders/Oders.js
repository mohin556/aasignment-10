import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import './Oders.css';
import  { useContext } from 'react';
import icon from '../../icons/Group 33072.png';
import { UserContex } from './../../App';

const Oders = () => {
    const [logInUser,setLogInUser] = useContext(UserContex);
    const [oders,setOders] = useState([])
    console.log(oders)
    const {id} = useParams();
    useEffect(()=>{
        fetch('https://blooming-springs-99818.herokuapp.com/oders')
        .then(res => res.json())
        .then(data=> setOders(data))
    },[])

    const newOder = oders.find(({_id}) =>_id == id );
    console.log(newOder)

    return (
        <div className="oderContainer">
            
           
       <div className="userDetail">
          <h2>{logInUser.name}</h2>  
           <h2> Your Oder Done Success</h2> 

           <h2>Total Items : {oders.length}</h2>
       </div>
         <table>
             <tr className="table1" >
                 <th className="nameList">
                 {
                     oders.map(oder =><li>{oder.name}  </li>)
                  }
                  
                 </th>
                
                 {/* <th>Quantity</th>
                //  <th>Price</th> */}
             </tr>
             <tr id="checkk" className="stylenew">
                 <td>  </td>
                
             </tr>
            
         </table>
            
          

        </div>
    );
};

export default Oders;