import React from 'react'
import ReactDOM from 'react-dom/client'
import { CountContextProvider } from './context/countContext'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <CountContextProvider>
      <App/>
    </CountContextProvider>
  </React.StrictMode>,
)