import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navcomp from './component/nav/Navcomp.jsx';
import Banner from './component/banner/Banner';
import Donation from './component/donation/Donation';
import Statistics from './component/statistics/Statistics';
const router =createBrowserRouter([
  {
    path:'/',
    element:<Navcomp></Navcomp>,
    children:[
      {
        loader:() =>fetch('../public/API.json'),
        path:'/',
        element:<Banner></Banner>,
      },
      {
        path:'/donation/:donationid',
        loader:() => fetch(`../public/API.json`),
        element:<Donation></Donation>
      },
      {
        path:'/sta',
        element:<Statistics></Statistics>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
