import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Route, Router, Routes} from "react-router-dom";
import {ListPlayer} from "./ListPlayer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <App/>
  </StrictMode>,
)
