import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Component1 from './components/Component1'
// import Component2 from './components/Component2'
// import Component3 from './components/Component3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     {/* <Component1/>
      <Component2/>
      <Component3/>  */}
  </StrictMode>,
)
