import React from 'react';
import { NavLink } from 'react-router-dom';
import './Css/Navbar.css';

const Navbar = () => {

    return (
        <div className='navbar'>
            <ul>
                <NavLink id="link" className={(e)=>{return e.isActive?"red":""}} to="/"> <li>Home</li></NavLink>
                <NavLink  id="link" className={(e)=>{return e.isActive?"red":""}} to="/About"><li>About Us</li></NavLink>
                <NavLink id="link" className={(e)=>{return e.isActive?"red":""}} to="/GetCurrentAddress"><li>Location</li></NavLink>
            </ul>
            <div className="signup">
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Signup"><button type="button" className="btn btn-success">Sign up</button></NavLink>
            </div>

            
        </div>
    )
};

export default Navbar
