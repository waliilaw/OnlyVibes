import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
	<KindeProvider
		clientId="828e61deb65b4d95b39e5742a770a871"
		domain="https://0nlyvibes.kinde.com"
		redirectUri="http://localhost:3000"
		logoutUri="http://localhost:3000"
	>
    <App />
	</KindeProvider>
  </StrictMode>,
)
