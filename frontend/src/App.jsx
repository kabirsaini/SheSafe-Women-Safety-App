import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import Chatbot1 from './components/Chatbot/Chatbot1.jsx';
import GetHospital from './components/GetHospital.jsx';
import { LoadScript } from '@react-google-maps/api';



function App() {

  const libraries = ["places"];

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Frontpage /> </>
    },
    {
      path: '/Register',
      element: <><Register /> </>
    },


    {
      path: '/GetCurrentAddress',
      element: <> <Navbar /> <GetCurrentAddress /></>
    },
    {
      path: '/About',
      element: <> <Navbar /> <About /></>
    },
    {
      path: '/Signup',
      element: <> <Signup /></>
    },
    {
      path: '/Login',
      element: <> <Login /></>
    },
    {
      path: '/WomenSafetyVideos',
      element: <> <WomenSafetyVideos /></>
    },
    {
      path: '/UpdateRegister',
      element: <> <Navbar /> <UpdateRegister /></>
    },
    {
      path: '/Mainpage',
      element: <><Navbar /> <Mainpage /><Chatbot1 /></>
    },
    {
      path: '/Chatbot',
      element: <><Navbar /> <Mainpage /><Chatbot1 /></>
    },
    {
      path: '/NearbyHospitals',
      element: <><Navbar /> <GetHospital /></>,
    },
  ])
  // const [btnCount, setCount] = useState(0);



  // const handleClick = () => {
  //   setCount(btnCount + 1);
  // };

  return (
    <>
      <LoadScript
        googleMapsApiKey="AIzaSyDKu-HIFLE5XrCNmndmrIsOyD9TQI5ac2A"
        libraries={libraries}
        onError={(err) => console.error("Google Maps API load error:", err)}
      >
        <RouterProvider router={router} />
      </LoadScript>
      <ToastContainer position="top-center" autoClose={2000} />


    </>
  );
}

export default App;
