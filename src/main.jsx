import React from 'react'
import { createRoot } from 'react-dom/client'
import PortfolioView from './views/PortfolioView.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioView />
  </React.StrictMode>,
)