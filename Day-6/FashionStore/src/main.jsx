import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';

// import Compoenent1 from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Compoenent1/> */}
    <Navbar/>
    <App />
  </StrictMode>,
)
