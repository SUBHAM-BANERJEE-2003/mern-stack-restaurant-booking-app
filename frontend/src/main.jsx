import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from '../pages/Login.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from '../pages/AboutPage.jsx'
import BookSlot from '../pages/BookSlot.jsx'
import MenuPage from '../pages/MenuPage.jsx'
import ReservationPage from '../pages/ReservationPage.jsx'
import Createaccount from '../pages/Createaccount.jsx'
import { UserProvider } from './Usercontext.jsx' 
import UserProfile from '../src/components/UserProfile.jsx'
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
    element: ( <UserProvider>
      <Login/>
    </UserProvider>),
  },
  {
    path: '/about',
    element:(
      <UserProvider>
        <AboutPage/>
      </UserProvider>
    ),
    
  },
  {
    path: '/bookslot',
    element:(
      <UserProvider>
        <BookSlot/>
      </UserProvider>
    ),
  },
  {
    path: '/menu',
    element:(
      <UserProvider>
        <MenuPage/>
      </UserProvider>
    ),
  },
  {
    path: '/reservation',
    element:(
      <UserProvider>
        <ReservationPage/>
      </UserProvider>
    ),
  },
  {
    path: '/signup',
    element: ( <UserProvider>
      <Createaccount/>
    </UserProvider>
    ),
  },
  {
    path: '/userprofile',
    element:(
      <UserProvider>
        <UserProfile/>
      </UserProvider>
    ),
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
