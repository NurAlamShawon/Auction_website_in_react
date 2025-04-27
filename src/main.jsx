import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div data-theme="light" className="min-h-screen bg-base-200 text-base-content">
      <App />
    </div>
  </React.StrictMode>
)