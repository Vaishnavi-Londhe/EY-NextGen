import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function PostFashion() {

    const [name, setname] = useState("");
    const [size, setsize] = useState("");
    const [color, setcolor] = useState("");
    const [price, setprice] = useState(0);
    const [occasion, setoccasion] = useState("");
    const [image, setimage] = useState("");
    const [rating, setrating] = useState(0);

        const apipostdata= async ()=> {
            
        
            try{
                const jsonobject =  await axios.post('http://127.0.0.1:3000/addfashionitem',{name,size,color,price,occasion,image,rating})
                alert("Data Saved Successfully")
                console.log(jsonobject.data)
            }
            catch(error){
                console.log("Post Data Failed")

            }
             console.log(name+size+color+price+occasion+image+rating)
        }

  return (
    <>
    <div className="p-3 mb-2 bg-secondary-subtle text-secondary-emphasis">
    <h1>PostMovie</h1>
    <form>
        <label> Name : </label> 
        <input type='text' onChange={(e)=>setname(e.target.value)}
         placeholder='Enter Fashion Name'/> <br />

        <label> Size : </label> 
        <input type='text' onChange={(e)=>setsize(e.target.value)}
        placeholder='Enter Size'/> <br />

        <label> Color : </label> 
        <input type='text' onChange={(e)=>setcolor(e.target.value)}
        placeholder='Enter Color'/> <br />

        <label> Price : </label>  
        <input type='number' onChange={(e)=>setprice(e.target.value)}
        placeholder='Enter Price'/> <br />

        <label> Occasion : </label> 
        <input type='text' onChange={(e)=>setoccasion(e.target.value)}
         placeholder='Enter Occasion'/> <br />

        <label> Image : </label> 
        <input type='text' onChange={(e)=>setimage(e.target.value)}
         placeholder='Enter Image'/> <br />

        <label> Rating : </label> 
        <input type='number' onChange={(e)=>setrating(parseFloat((e.target.value)))}
         placeholder='Enter rating'/> <br />

        <input className="btn btn-outline-dark" type="button" onClick={apipostdata} value="Add Fashion Item"  />
    </form>
    </div>
    
    </>
    
  )
}

export default PostFashion