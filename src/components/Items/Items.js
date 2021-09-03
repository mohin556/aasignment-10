import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css'


const pricingBtn=(id)=>{
 const url = `https://shielded-ocean-99963.herokuapp.com/newitems/${id}`;
 fetch(url)
 .then(res => res.json())
 .then(item => {
   console.log(item)
   
 })

}


const Items = ({item}) => {

    
    
    
    return (
        <div className="item-container">
            <div className="items">
             <img style={{height: '220px'}}  src={item.imageURL} alt="" />
             <h3>{item.name}</h3>  <h3>{item.weight}</h3>
             <h4 className="dollar" id="pricing" >  ${item.price}</h4>
             {/* <button  onClick={()=>pricingBtn(item._id)} className="buyButton">Buy Now</button> */}
             <Link to={`/deals/${item._id}`}><button  onClick={()=>pricingBtn(item._id)} className="buyButton">Buy Now</button></Link>
            {/* <a href="/deals"> <button  onClick={()=>pricingBtn(item._id)} className="buyButton">Buy Now</button></a> */}
            
            {/* <input  id="dollarCount" value="500" type="number" placeholder="200 "/>  */}
         
            </div>

            
        </div>
       
    );
   
    
};

export default Items;