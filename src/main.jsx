import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BrandShop from './BrandShop';
import Home from './components/Home';
import Register from './components/Auth-components/Register';
import AddProduct from './components/AddProduct';
import Bmw from './components/Companies/Bmw';
import Audi from './components/Companies/Audi';
import Tata from './components/Companies/Tata';
import Lamborghini from './components/Companies/Lamborghini';
import Login from './components/Auth-components/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import ProductDetails from './components/Companies/ProductDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Mycart from './components/Companies/Mycart';
import UpdateProduct from './components/Companies/UpdateProduct';
import Jaguar from './components/Companies/Jaguar';
import Errorpage from './components/Companies/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BrandShop></BrandShop>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/addproduct",
        element:<AddProduct></AddProduct>
      },
      {
        path:":brand/updateproduct/:id",
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)

      },
      {
        path:"/mycart/:uid",
        element:<Mycart></Mycart>,
       loader:({params})=>fetch(`http://localhost:5000/users/${params.uid}`)
      },
      {
        path:"/details/:id",
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:"/bmw",
        element:<Bmw></Bmw>,
        loader:()=>fetch('/http://localhost:5000/allproducts/bmw')
      },
      {
        path:"/jaguar",
        element:<Jaguar></Jaguar>,
        loader:()=>fetch('http://localhost:5000/allproducts/jaguar')
      },
      {
        path:"/mercedes",
        element:<Jaguar></Jaguar>,
        loader:()=>fetch('http://localhost:5000/allproducts/mercedes')
      },
      {
        path:"/audi",
        element:<Audi></Audi>,
        loader:()=>fetch('http://localhost:5000/allproducts/audi')
      },
      {
        path:"/tata",
        element:<Tata></Tata>,
        loader:()=>fetch('http://localhost:5000/allproducts/tata')
      },
      {
        path:"/lamborghini",
        element:<Lamborghini></Lamborghini>,
        loader:()=>fetch('http://localhost:5000/allproducts/lamborghini')
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <AuthProvider>
  <RouterProvider router={router} />

  </AuthProvider>
  </React.StrictMode>,
)
