import React from 'react'
import './style.css'
import flag from './images/flag.png'
import cartoon from './images/cartoon1.jpg'
import cartoon2 from './images/cartoon2.jpg'

function App() {
  return (
    <>
    {/* <h1>A to Z</h1> */}
    <div className='box1'></div>
    <div className='box2'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ashoka_Chakra.svg/1200px-Ashoka_Chakra.svg.png' width={100} height={100} />
    </div>
    <div className='box3'></div>
    
    <img src={flag} />
    <img src={cartoon} />
    <img src={cartoon2} />
    {/* <ul>
      <li>A - Apple <img src='https://cdn.pixabay.com/photo/2022/03/11/10/44/apple-7061902_1280.png' width={50} height={50}/></li>
      <li>D - Ball<img src/> </li>
      <li>C - Cat</li>
      <li>D - Dog</li>
      <li>E - Eye</li>
      <li>F - Fish</li>
    </ul> */}
    </>
  )
}

export default App