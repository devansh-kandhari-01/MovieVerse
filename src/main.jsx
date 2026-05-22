import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import FavouriteProvider from './context/FavouriteProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavouriteProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </FavouriteProvider>
  </StrictMode>,
)
