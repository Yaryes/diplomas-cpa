import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { NavBars } from './components/NavBars'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <NavBars/>
    <React.StrictMode>
        <App/>
      </React.StrictMode>,
  </BrowserRouter>
)
