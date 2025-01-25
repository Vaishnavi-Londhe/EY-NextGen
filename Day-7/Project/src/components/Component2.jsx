// import React, { useState } from 'react'

// function Component2() {
//     const[kg,setkg]=useState(0);
//     const [res,setres]=useState(0);
//     const valkg=(e)=>{
//         setkg(parseFloat(e.target.value))
//     }
//     const convert = (e)=>{
//        var pounds= kg*2.205;
//        setres(pounds);
//     }

//   return (
//     <div>
//         <h1>KG to Pounds</h1>
//         <form>
//       <input type="number"  placeholder='kg' onChange={valkg} />
//       <br/>
//       {/* <input type="number"  placeholder='Enter height in meter' />
//       <br/>*/}
//       <input type="button" value="Convert" onClick={convert} /> 
      
//       </form>
//       <h1>Result :{res}</h1>
//       <br/>
//       </div>
//   )
// }

// export default Component2