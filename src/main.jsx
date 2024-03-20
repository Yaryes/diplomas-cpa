import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Index } from './Index'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <React.StrictMode>
        <Index></Index>
    </React.StrictMode>
  </BrowserRouter>
)
