import Login from '@components/Auth/Login.jsx';
import Signup from '@components/Auth/Signup.jsx';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './Css/Frontpage.css';
import {toast } from 'react-toastify';

const Frontpage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll(".fade-left, .fade-right");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);


    return (
        <>

            <div style={{ backgroundImage: "url('/images/women1.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "100vh", width: "100%"  , boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
}}>
                <nav className="navbar1">
                    <div className="navbar-logo1">SheSafe</div>
                    <ul className="navbar-links1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0px 40px", gap: "50px" }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Contact us</Link></li>
                    </ul>
                </nav>

                <div className="topimage-cont">
                    <div className="top-container">
                        <h1>SheSafe</h1>
                        <p id="frontline">Empowering women to live without fear</p>

                        <button className='Auth' onClick={() => setShowSignup(true)}>Get Started</button>
                        {showSignup && <Signup onClose={() => setShowSignup(false)} />}

                        <button className='Auth' onClick={() => setShowLogin(true)} >Log In</button>
                        {showLogin && <Login onClose={() => setShowLogin(false)} />}
                    </div>
                </div>
            </div>


            {/* Who we are */}

            <div className="about" style={{ marginTop: "150px" }}>
                <div className="fade-left">
                    <h1 style={{ color: "#7131ab", fontSize: "5em", fontWeight: "600" }}> Who </h1>
                    <h2 style={{ fontSize: "2.7rem" }}>we are?</h2>
                    <p style={{ marginTop: "20px", fontSize: "1.1rem", color: "#333" }}>
                        SheSafe is a safety-driven platform built to empower women.
                    </p>
                    <p style={{ fontSize: "1.1rem", color: "#333" }}>
                        It is more than just an app — <strong>it’s a movement.</strong>
                        We stand for safety, solidarity, and strength.<br></br>
                        Our goal is simple:  to empower women with tools that protect, connect, and inspire.
                    </p>
                    <p style={{ fontSize: "1.1rem", color: "#333" }}>
                        Together, we’re creating a world where no woman feels alone, unheard, or unprotected.<br></br>
                        SheSafe is your companion in moments of fear and your support in moments of strength.
                    </p>

                </div>

                <div className="fade-right">
                    <img src="/images/Screenshot 2025-12-06 at 8.25.13 PM.png" alt="ss" height={500} width={500} style={{ borderRadius: "40px" }} />
                </div>
            </div>

            {/* What We do */}

            <div className='fade-left' style={{ marginLeft: "70px", marginTop: "80px" }}>

                <h1 style={{ color: "#7131ab", fontSize: "5em", fontWeight: "600" }}> What <span style={{ fontSize: "2.7rem",color: "black" }}>we do?</span> </h1>
            </div>


            <div className='about' style={{ marginTop: "50px", gap: "30px" }}>


                <div className="Do-cont fade-left" >
                    <div class="Do-icon">
                        <img src="/images/7271354.png" alt="" />
                    </div>
                    <p >
                        Instantly send SOS alerts with your real-time location during moments of distress.
                    </p>
                </div>
                <div className="Do-cont fade-left">
                    <div class="Do-icon">
                        <img src="/images/3074435.png" alt="" />
                    </div>
                    <p>
                        Quickly locate the nearest police stations for immediate assistance.
                    </p>
                </div>

                <div className="Do-cont fade-right" >
                    <div class="Do-icon">
                        <img src="/images/8943377.png" alt="" />
                    </div>
                    <p >
                        Get round-the-clock support, FAQs, and guidance through our intelligent chatbot.
                    </p>
                </div>

                <div className="Do-cont fade-right" >
                    <div class="Do-icon">
                        <img src="/images/2436890.png" alt="" />
                    </div>
                    <p >
                        Read real experiences of brave women who have overcome difficult situations and learn from their journeys.
                    </p>
                </div>
                <div className="Do-cont fade-right" >
                    <div class="Do-icon">
                        <img src="/images/6176852.png" alt="" />
                    </div>
                    <p>
                        Learn practical ways to stay protected from harassment and unsafe situations.
                    </p>
                </div>
            </div>


            <div style={{ marginTop: "100px", height: "300px", width: "100%", backgroundColor: "rgb(249 238 253 / 22%))", display: "flex", justifyContent: "flex-end", flexDirection: "row", gap: "80px", padding: "50px 50px" , position: "relative" ,boxShadow: "0px -1px 9px rgb(0 0 0 / 6%)"}}>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", position: "absolute", left: "20px",paddingLeft:"20px" }}>

                    <h2 style={{fontWeight: "700"}}>SheSafe</h2>
                    <p style={{color: "#545a66", fontStyle: "italic"}}>Be the change you want to see</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", fontSize: "small" }}>
                    <h4 style={{fontWeight: "600",fontSize: "1.2rem",marginBottom:"20px"}}>Contact Us</h4>
                    <p style={{color: "#545a66"}}>  <img src="/images/instagram-vector-logo-icon-social-media-logotype_901408-392.png" alt="" height={26} width={26} /> Instagram</p>
                    <p style={{color: "#545a66"}}> <img src="/images/facebook-logo-facebook-icon-transparent-free-png.webp" alt="" height={26} width={26} /> Facebook</p>
                    <p style={{color: "#545a66"}}> <img src="/images/4138130.png" alt="" height={26} width={26} /> Linkedin</p>
                    <p style={{color: "#545a66"}}><img src="/images/logo-twitter-icon-symbol-0.png" alt="" height={26} width={26} /> Twitter</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", marginRight:"30px" ,fontSize: "small"}}>
                    <h4 style={{fontWeight: "600",fontSize: "1.2rem",marginBottom:"20px"}}>News Letter</h4>
                    <p style={{color: "#545a66"}}>Connect with us</p>

                    <div style={{ display: 'flex', gap: '10px', justifyContent:'center', alignItems: 'center'}} >
                        <input type="email" placeholder="Enter your email" style={{ padding: "5px", borderRadius: "20px", border: "0.5px solid #333" ,    height: "40px", width: "14rem"}} />

                        <button onClick={() => toast.success("Subscribed Successfully!")}
                         style={{ padding: "8px 16px", borderRadius: "20px", border: "none", backgroundColor: "#7131ab", color: "#fff" }}>Subscribe</button>

                    </div>

                </div>

                <div style={{ position: "absolute", left: "20px",bottom:"5px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                    <p style={{margin:'0px 0px 0px 20px',color: "#545a66"}}>&copy; 2024 SheSafe. All rights reserved.</p>
                </div>
            </div>


        </>
    );
};

export default Frontpage;
