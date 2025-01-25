import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import PostMovie from './components/PostMovie'
import GetMovie from './components/GetMovie'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div > <PostMovie/></div> 
    {/* //style={{ marginTop: 10 ,marginLeft:10}}  */}
      <div>
      <GetMovie/>
    </div>
  </StrictMode>,
)
