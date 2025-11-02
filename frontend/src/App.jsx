import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About.jsx';
import Login from './components/Auth/Login.jsx';
import Signup from './components/Auth/Signup.jsx';
import Footer from './components/Footer.jsx';
import Frontpage from './components/Frontpage.jsx';
import { default as GetCurrentAddress } from './components/GetCurrentAddress.jsx';
import Mainpage from './components/Mainpage.jsx';
import Navbar from './components/Navbar';
import Register from './components/Register.jsx';
import UpdateRegister from './components/UpdateRegister.jsx';
import WomenSafetyVideos from './components/WomenSafetyVideos.jsx';
import './index.css';


function App() {


  const router= createBrowserRouter([
    {
      path: '/',
      element: <><Frontpage/> </>
    },
    {
      path: '/Register',
      element: <><Register/> </>
    },
    {
      path: '/GetCurrentAddress',
      element: <> <Navbar/> <GetCurrentAddress/></>
    },
    {
      path: '/About',
      element: <> <Navbar/> <About/></>
    },
    {
      path: '/Signup',
      element: <> <Signup/></>
    },
    {
      path: '/Login',
      element:<> <Login /></>
    },
    {
      path: '/WomenSafetyVideos',
      element:<> <WomenSafetyVideos /></>
    },
    {
      path: '/UpdateRegister',
      element: <> <Navbar/> <UpdateRegister/></>
    },
    {
      path: '/Mainpage',
      element:<><Navbar/> <Mainpage /><Footer/></>
    }
  ])
  const [btnCount, setCount] = useState(0);
  


  const handleClick = () => {
    setCount(btnCount + 1);
  };

  return (
    <>
    <RouterProvider router={router} />


    </>
  );
}

export default App;
