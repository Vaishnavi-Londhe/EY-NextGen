import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function PostMovie() {

        const [moviename,setmoviename] = useState(0);
        const [hero,setheroname] = useState(0);
        const [heroine,setheroinename] = useState(0);
        const [year,setyear] = useState(0);
        const [rating,setrating] = useState(0);
        const [genre,setgenre] = useState(0);

        const apipostdata= async ()=> {
            
        
            try{
                const jsonobject =  await axios.post('http://127.0.0.1:3000/addmoviedata',{moviename,hero,heroine,year,rating,genre})
                alert("Data Saved Successfully")
                console.log(jsonobject.data)
            }
            catch(error){
                console.log("Post Data Failed")

            }
             console.log(moviename+hero+heroine+year+rating+genre)
        }

  return (
    <>
    <div className="p-3 mb-2 bg-info-subtle text-info-emphasis">
    <h1>PostMovie</h1>
    <form>
        <label> Movie Name : </label> 
        <input type='text' onChange={(e)=>setmoviename(e.target.value)}
         placeholder='Enter Movie Name'/> <br />

        <label> Hero Name : </label> 
        <input type='text' onChange={(e)=>setheroname(e.target.value)}
        placeholder='Enter Hero Name'/> <br />

        <label> Heroine Name : </label> 
        <input type='text' onChange={(e)=>setheroinename(e.target.value)}
        placeholder='Enter Heroine Name'/> <br />

        <label> Release Year : </label>  
        <input type='number' onChange={(e)=>setyear(e.target.value)}
        placeholder='Enter Release Year'/> <br />

        <label> Rating : </label> 
        <input type='number' onChange={(e)=>setrating(parseFloat((e.target.value)))}
         placeholder='Enter Your Rating'/> <br />

        <label> Movie Genre : </label> 
        <input type='text' onChange={(e)=>setgenre(e.target.value)}
         placeholder='Enter Movie Genre'/> <br />

        <input className="btn btn-outline-dark" type="button" onClick={apipostdata} value="Add Movie Data"  />
    </form>
    </div>
    
    </>
    
  )
}

export default PostMovie