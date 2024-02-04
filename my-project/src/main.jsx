import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { MiddleSection } from './components/MiddleSection.jsx'
import { ProfileInfo } from './Pages/ProfileInfo.jsx'
import { Home } from './Pages/Home.jsx'
import { Post } from './components/Post.jsx'
import { Allpost } from './components/Allpost.jsx'
import { Explore } from './Pages/Explore.jsx'
import { Signup } from './Pages/Signup.jsx'
import { Follow } from './components/Follow.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route path='home' element={<Home />} />
            <Route path='profile' element={<ProfileInfo />} >
                <Route path='post' element={<Allpost />} />
                <Route path='card' element={<Follow />} />
            </Route>
            <Route path='explore' element={<Explore/>}/>
            <Route path='signup' element={<Signup />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
)
