import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navcomp from './component/nav/Navcomp.jsx';
const router =createBrowserRouter([
  {
    path:'/',
    loader:() =>fetch('../public/API.json'),
    element:<Navcomp></Navcomp>,
    // children:[
    //   {
    //     path:'/donate',
    //     element:
    //   }
    // ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
 
  </React.StrictMode>,
)
