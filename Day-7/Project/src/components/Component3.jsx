// import React, { useState } from 'react'
// // import normal from './src/images/normal.webp'
// // import over from   './images/over.jpg'
// // import obese from   './images/obese.jpg'

// function Component3() {

//     const[w,setweight]=useState(0);
//     const[h,setheight]=useState(0);
//     const[res,setres]=useState("");

//     const weight=(e)=>{
//         setweight(parseFloat(e.target.value));
//         console.log(weight);
//     }
//     const height=(e)=>{
//         setheight(parseFloat(e.target.value));
//         console.log(height);
//     }

//     const calbmi=()=> {

//         var bmi = w / (h * h);
//         var result = "";
//         let img='';

//         if (bmi < 18.5) {

//             result = "Under Weight";
//             img='https://www.pngitem.com/pimgs/m/510-5101313_weight-clipart-cartoon-hd-png-download.png ';
//             //<img src='https://www.pngitem.com/pimgs/m/510-5101313_weight-clipart-cartoon-hd-png-download.png' width={200} height={200}/>
//         } else if (bmi >= 18.5 && bmi <= 24.9) {
//             console.log("Normal Weight");
//             result = "Normal Weight";
//         } else if (bmi >= 25 && bmi <= 29.9) {
//             console.log("Over weight");
//             result = "Over Weight";
//         } else {
//             console.log("Obesed");
//             result = "Obesed Weight";
//         }
//             setres(result);
//     }


//   return (
//    <>
//    <input type="number"  placeholder='Enter the weight' onChange={weight}/>
//    <br/>
//    <input type="number"  placeholder='Enter the height' onChange={height}/>
//    <br/>
//    <input type="button" value="calculate"  onClick={calbmi}/> 
//    <h2>Result: {res}</h2>
//    {<img src={imgSrc} alt="BMI category" width={200} height={200} />}

//    </>
//   )
// }

// export default Component3

