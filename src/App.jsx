import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About.jsx';
import Footer from './components/Footer';
import { default as GetCurrentAddress } from './components/GetCurrentAddress.jsx';
import Navbar from './components/Navbar';
import Signup from './components/Signup.jsx';
import Mainpage from './components/mainpage';
import './index.css';


function App() {


  const router= createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar /><Mainpage/> </>
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
      element: <> <Navbar/> <Signup/></>
    }
  ])
  const [btnCount, setCount] = useState(0);
  


  const handleClick = () => {
    setCount(btnCount + 1);
  };

  return (
    <>
    <RouterProvider router={router} />

      <Footer />
    </>
  );
}

export default App;
