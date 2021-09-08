import React, { useEffect, useState } from 'react';
import './Checkout.css';
import Item from '../Items/Items'; 
import Items from '../Items/Items';
import { Link, useParams} from 'react-router-dom';
import { UserContex, } from './../../App';
import  { useContext } from 'react';
import { useForm } from 'react-hook-form';


const Checkout = ({item}) => {
 
    // const { register, handleSubmit,onSubmit, watch, errors} = useForm();
    const {id} = useParams();
    const [logInUser,setLogInUser] = useContext(UserContex);
    const [select,setSelected] = useState([]);
   const [productInfo,setProductInfo] = useState({});
  //  console.log(productInfo)
 
  //  console.log(productInfo.name)
   
    useEffect(()=>{
        fetch(`https://blooming-springs-99818.herokuapp.com/items` )
        .then(res => res.json())
        .then( data => setSelected(data))

    },[])
  
    let newSelect = select.find(pd=>pd._id == id );
  // useEffect(()=>{
  
  //   setProductInfo(newSelect )

  // },[productInfo?.name])

   
 
  
const checkoutHandle =(id) => {
  
  
  

  
   const url =`https://blooming-springs-99818.herokuapp.com/oderAdded`;
  
   fetch(url,{
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify(newSelect)
   })
   .then(res => {
                  alert('server side response', )
                  console.log(res)
                                })


}



    return (
      
        <div className="chackoutMaindiv">
          <div className="userName">
                <p> Hi, {logInUser.name}</p>
                <p></p>
          </div>
          <h1 className="title">Checkout</h1>
          
         <table>
             <tr className="table" >
                 <th>Description</th>
                 <th>Quantity</th>
                 <th>Price</th>
             </tr>
             <tr className="stylenew">
                 {/* <td>Mrrks milk full cream </td>
                 <td>1  </td>
                 <td> </td> */}
             </tr>


             <tr id="checkk" className="stylenew">
                 <td> {newSelect?.name} </td>
                 <td>1</td>
                 <td> {newSelect?.price}  </td>
             </tr>
         </table>


         <div >
       <Link to={`/oders/${newSelect?._id}`}>  <button onClick={()=>checkoutHandle(newSelect?._id)} className="chkButton" >Checkout</button> </Link>
         </div>
        </div>
    );
};

export default Checkout;