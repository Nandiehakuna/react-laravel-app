import {createBrowserRouter, Navigate} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Users from './pages/Users'
import DefaultLayout from './components/DefaultLayout'
import GeustLayout from './components/GeustLayout'
import Dashboard from './pages/Dashboard'
impor

const router = createBrowserRouter([

    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to='/users'/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>

            }
        ]

    },
    {
        path:'/',
        element:<GeustLayout/>,

        children:[
            {
                path:'/login',
                element:<Login/>
            },
        
            {
                path:'/signup',
                element:<Login/>
            },
           
        ]

    },

    {
        path:'/users',
        element:<Users/>
    },
  
  
    {
        path:'/',
        element:<NotFound/>
    },
  



])

export default router