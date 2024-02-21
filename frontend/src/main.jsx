import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import AboutPage from '../pages/AboutPage.jsx'
import BookSlot from '../pages/BookSlot.jsx'
import CheckConnection from '../pages/CheckConnection.jsx'
import Createaccount from '../pages/Createaccount.jsx'
import Login from '../pages/Login.jsx'
import MenuPage from '../pages/MenuPage.jsx'
import NotFound from '../pages/NotFound.jsx'
import OrderFood from '../pages/OrderFood.jsx'
import ReservationPage from '../pages/ReservationPage.jsx'
import UserProfile from '../src/components/UserProfile.jsx'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './Usercontext.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
  },
  {
    path: '/login',
    element: (<UserProvider>
      <Login />
    </UserProvider>),
  },
  {
    path: '/about',
    element: (
      <UserProvider>
        <AboutPage />
      </UserProvider>
    ),

  },
  {
    path: '/bookslot',
    element: (
      <UserProvider>
        <BookSlot />
      </UserProvider>
    ),
  },
  {
    path: '/menu',
    element: (
      <UserProvider>
        <MenuPage />
      </UserProvider>
    ),
  },
  {
    path: '/reservation',
    element: (
      <UserProvider>
        <ReservationPage />
      </UserProvider>
    ),
  },
  {
    path: '/signup',
    element: (<UserProvider>
      <Createaccount />
    </UserProvider>
    ),
  },
  {
    path: '/userprofile',
    element: (
      <UserProvider>
        <UserProfile />
      </UserProvider>
    ),
  },
  {
    path: '/foodorder/:id',
    element: (
      <UserProvider>
        <OrderFood />
      </UserProvider>
    ),
  },
  {
    path: '*',
    element: (
      <UserProvider>
        <NotFound />
      </UserProvider>
    )
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CheckConnection>
      <RouterProvider router={router} />
    </CheckConnection>
  </React.StrictMode>,
)
