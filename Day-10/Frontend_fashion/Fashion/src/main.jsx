import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostFashion from './components/PostFashion.jsx'
import GetFashion from './components/GetFashion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div style={{ marginTop: 10 ,marginLeft:10}}><PostFashion/></div>
    <div><GetFashion/> </div>
   
  </StrictMode>,
)
