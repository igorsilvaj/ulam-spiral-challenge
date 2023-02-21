import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CanvasContextProvider from './Canvas/Context/CanvasContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CanvasContextProvider>
      <App />
    </CanvasContextProvider>
  </React.StrictMode>,
)
