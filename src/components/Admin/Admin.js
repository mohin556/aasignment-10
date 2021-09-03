import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import icon1 from "../../icons/grid 1.png";
import icon2 from "../../icons/plus 1.png";
import icon3 from "../../icons/edit 1.png"
import './Admin.css';
import uploadIcon from '../../icons/UOloadpic.png'
import axios from 'axios';
import { Link } from 'react-router-dom';



const Admin = () => {
   const { register, handleSubmit, watch, errors} = useForm();
   
   const [imageURL,setImageURL] = useState(null);
   

   const onSubmit = data => {
     const eventData = {
      imageURL : imageURL,
       name: data.name,
       price: data.price,
       weight : data.weight
       
     };
      const url =`https://shielded-ocean-99963.herokuapp.com/addEvent`;
      console.log(eventData)
      fetch(url,{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response', res))





    };

  const handleImageUpload = event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key','bf2f9d9f49f1a45f6bf78d11243b784f')
    imageData.append('image',event.target.files[0])

    
    axios.post('https://api.imgbb.com/1/upload',imageData )
      
    .then(function (response) {
      setImageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });




  }
    return (
        <div className="adminContainer">
           <div className="left">
             <h2>FRESH VALLEY</h2>
             <br />
             <a href="/manageitems"  className="manage"   ><img className="icons" src={icon1} alt="" /> Manage Items</a>
             {/* <Link  to="/manageitems">  </Link> */}
             {/* <a href="/manageitems"   >Manage Items</a> */}
             {/* <p >  <img className="icons" src={icon1} alt="" />   Manage Items</p> */}
             <p> <img className="icons" src={icon2} alt="" /> Add Items</p>
             <p><img className="icons" src={icon3} alt="" />  Edit Product</p>
             
           </div>

            <div className="form">
                <h4>Add Items</h4>
               <form onSubmit={handleSubmit(onSubmit)}>
           
               <div className="inputFrom">
                 
                  <div>
                       <label >Product Name </label>
                   
                       <input className="WithSize"  name="name" defaultValue="product name " ref={register} />
                  
                  </div>

                   <div>
                      <label>Weight</label>
                      <input className="WithSize" name="weight" defaultValue="Weight " ref={register} />
                   </div>
                    
                   <div>
                       <label>Price</label>
                       <input className="WithSize"  name="price" defaultValue="product name " ref={register} />
                   
                   </div>

                   <div>
                       <label>Add Photo</label>


                     <div className="uploadLabel">

                        <label htmlFor="" className="PhotoUpload" >
                        <img className="" src={uploadIcon} alt="" />
                      upload
                       </label>
                       <input   className="uploadButton" name="exampleRequired" type="file"   onChange={handleImageUpload}   />
                   </div>
                  
                   </div>

                   
                 </div>
                 <input className="right" type="submit" value="Save" />
               </form>

            
              

            </div>
           {/* <div>
              <form onSubmit={handleSubmit(onSubmit)} >
              <input className="WithSize" name="text" placeholder="Product name" {...register("name")} /> 
             <br />
             <input className="WithSize" price="number" placeholder="Product price"  type="number" {...register("price")} />
             <br />
             <input className="uploadButton" type="file"  onChange={handleImageUpload} />
             <br />
             <input className="right" type="submit" value="Save" />
             <br />

              </form>
            </div> */}


        </div>
    );
};

export default Admin;