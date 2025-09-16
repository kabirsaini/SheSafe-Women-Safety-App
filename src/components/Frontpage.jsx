import Login from '@components/Auth/Login.jsx';
import Signup from '@components/Auth/Signup.jsx';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/Frontpage.css';

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
                        entry.target.classList.remove("show"); // fade out on scroll back
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (leftRef.current) observer.observe(leftRef.current);
        if (rightRef.current) observer.observe(rightRef.current);

        return () => {
            if (leftRef.current) observer.unobserve(leftRef.current);
            if (rightRef.current) observer.unobserve(rightRef.current);
        };
    }, []);


    return (
        <>
            <div>
                <div className="topimage-cont">
                    <div className="top-container">
                        <h1>SheSafe</h1>
                        <p>Empowering women to live without fear</p>

                        <button onClick={() => setShowSignup(true)}>Get Started</button>
                        {showSignup && <Signup onClose={() => setShowSignup(false)} />}

                        <button onClick={() => setShowLogin(true)}>Log In</button>
                        {showLogin && <Login onClose={() => setShowLogin(false)} />}
                    </div>
                </div>
            </div>

            <div className="header">
                <h2>About SheSafe</h2>
            </div>

            <div className="about">


                <div className="about-us1 fade-left" ref={leftRef}>
                <h3> Who we are? </h3>
                    <p>
                        Our mission is to provide a safe and supportive environment for women
                        to share their experiences and connect with others who have gone
                        through similar situations.
                    </p>
                    <p>
                        We believe that by sharing our stories, we can help each other heal
                        and grow stronger.
                    </p>
                </div>

                <div className="about-us2 fade-right" ref={rightRef}>
                    <h3> 🎯 Our Mission </h3>
                    <p>
                        Our mission is to provide a safe and supportive environment for women
                        to share their experiences and connect with others who have gone
                        through similar situations.
                    </p>
                    <p>
                        We believe that by sharing our stories, we can help each other heal
                        and grow stronger.
                    </p>
                </div>
            </div>

            
        </>
    );
};

export default Frontpage;
