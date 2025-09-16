import '@/components/Auth/Login.jsx';
import '@/components/Auth/Signup.jsx';
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Css/Mainpage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


// Custom Arrow Components

const Mainpage = () => {


    const onMail = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch('http://localhost:3000/api/mail/mailMessage', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });

            const result = await res.json();

            if (result) {
                alert("Mail Sent Successfully");
            }
            else{
                alert("Mail not sent");
                throw new Error("Mail not sent");
            }
        } catch (err) {
            console.log(err);
        }
    }

    const Navigate = useNavigate();

    return (
        <>



            <div className='top'>
                    <div className='protecthead'>
                <h1>Emergencies</h1>
                </div>
                <div className='protect'>
                    <div className="protectbox">
                        <h4>Send SOS! </h4>
                        <img src="/images/SOS2.png" alt="" />
                        <button onClick={onMail}>Send Mail</button>
                    </div>
                    <div className="protectbox">
                        <h4>Nearby Police Station</h4>
                        <img src="/images/police1.jpg" alt="" />
                        <button onClick={() => Navigate('/GetCurrentAddress')}>Get Location</button>
                    </div>
                    <div className="protectbox">
                        <h4>Report Police </h4>
                        <img src="/images/fir-police.jpeg" alt="" />
                        <button id="a"><a href='https://cyberpolice.nic.in/'>Click here</a></button>
                    </div>
                </div>

            

            </div>

        </>
    );
};

export default Mainpage;
