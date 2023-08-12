import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import DateSelection from '../Components/DateSelection/DateSelection';
import Hero from '../Components/Hero/Hero';
import SignUp from '../Components/SingUp/SignUp';
import LogIn from '../Components/LogIn/LogIn';
import Hotels from '../Components/Hotels/Hotels';
import PrivateRoutes from './PrivateRoutes';

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Hero></Hero>
            },
            {
                path:'/book',
                element:<DateSelection></DateSelection>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/logIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/hotels',
                element:<PrivateRoutes><Hotels></Hotels></PrivateRoutes>,
                loader:()=>fetch('https://travelly-travel-website-server.vercel.app/hotels')
            },


        ]
    }
])
