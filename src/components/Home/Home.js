import React, { useEffect, useState } from 'react';
import icon from '../../icons/Group 33072.png';
import './Home.css'
import Items from './../Items/Items';
import ManageItems from '../ManageItems/ManageItems';

const Home = () => {
      const [items,setItems] = useState([]);
      
     

      useEffect(()=>{
          fetch('https://blooming-springs-99818.herokuapp.com/items')
          .then(res => res.json())
          .then(data=> setItems(data))
      },[])
    return (
        <div>
           <div className="headers">
                <img src={icon} alt="" />
               
           </div>
           <div className="option">
               <a className="a" href="/">Home</a>
               <a className="a" href="/oders">Oders</a>
               <a className="a" href="/admin">Admin</a>
               <a className="a" href="/deals">Deals</a>
               <a className="button" href="/login">  Login </a>
               {/* <button   className="button">Login</button> */}
           </div>
           <div className="serachPortion" >
               <input className="searching" type="search" name="" id="" placeholder="search book" />
               <button className="search-button">Search</button>
            
           </div>
           <div   >
               {
                
                items.map( item =>  <Items  item={item}></Items>)
                
               }
               
           </div>
           
          
           
        </div>
        
    );
};

export default Home;