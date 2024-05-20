import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import UserContextProvider from './Context/UserContextProvider.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/login',
    element: <Login />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </UserContextProvider>
)
