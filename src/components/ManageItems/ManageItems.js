import React, { useEffect, useState } from 'react';
import './ManageItems.css'
import icon1 from "../../icons/grid 1.png";
import icon2 from "../../icons/plus 1.png";
import icon3 from "../../icons/edit 1.png"
import Items from './../Items/Items';
import delet from '../../icons/Group 33150.png'
import edit from '../../icons/Group 307.png'

const ManageItems = () => {
  const [products,setProducts] = useState([]);
 
  const {name,_id} = products;
  // console.log(products)
 
  // console.log(products)
    
  useEffect(()=>{
      fetch('https://shielded-ocean-99963.herokuapp.com/editing')
      .then(res => res.json())
      .then(data=> setProducts(data))
  },[])
  const handleDelete = () =>{
    fetch(`https://shielded-ocean-99963.herokuapp.com/deletit/${products._id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
  }

  const list = products.map(product=> <ul> {product.name}  <button className="edit-button"><img className="edit" src={edit}alt="" /> </button > <button onClick={ handleDelete} className="edit-button"><img className="delet" src={delet} alt="" /></button></ul>  );
  
  
   
    return (
        <div className="adminContainer">
            <div className="left">
             <h2>FRESH VALLEY</h2>
             {/* <br /> */}
             <a href="/manageitems" className="manage"><img className="icons" src={icon1} alt="" /> Manage Items</a>
             {/* <Link  to="/manageitems">  </Link> */}
             {/* <a href="/manageitems"   >Manage Items</a> */}
             {/* <p >  <img className="icons" src={icon1} alt="" />   Manage Items</p> */}
             <p> <img className="icons" src={icon2} alt="" /> Add Items</p>
             <p><img className="icons" src={icon3} alt="" />  Edit Product</p>
             
           </div>

{/* {            
                  <div>
               
         {
             products.map(product=> product.name  )
         }

         </div> } */}
             
            
       <div className="list-container">
          <p className="list">{list}  </p>
       </div>
    

        </div>
    );
};

export default ManageItems;