import '@/components/Auth/Login.jsx';
import '@/components/Auth/Signup.jsx';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Css/Mainpage.css';
import WomenSafetyVideos from "./WomenSafetyVideos";
import Info1 from './Info/Info1';
import Info2 from './Info/Info2';
import Info3 from './Info/Info3';


// Custom Arrow Components

const Mainpage = () => {

    const [openPopup, setOpenPopup] = useState(null);


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
            else {
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
                    <div className="protectbox">
                        <h4>Report to Us </h4>
                        <img src="/images/Report.png" alt="" />
                        <button id="a">Click here</button>
                    </div>
                </div>

            </div>

            <div className='helpbox'>

                <div className="helptop">
                    <h2>Facing Any Difficulty ?</h2>
                    <h6>Get quick tips </h6>
                </div>

                <div className="helpcontainer">
                    <div className="helpbox1" id='helpbox1' onClick={() => setOpenPopup('cyber')}>
                        <p>Cyber <br />Bullying</p>
                    </div>

                    <div className="helpbox1" id='helpbox2' onClick={() => setOpenPopup('harassment')}>
                        <p>Harassment</p>
                    </div>

                    <div className="helpbox1" id='helpbox3' onClick={() => setOpenPopup('domestic')}>
                        <p>Domestic Violence</p>
                    </div>

                    {openPopup === 'cyber' && <Info1 onClose={() => setOpenPopup(null)} />}
                    {openPopup === 'harassment' && <Info2 onClose={() => setOpenPopup(null)} />}
                    {openPopup === 'domestic' && <Info3 onClose={() => setOpenPopup(null)} />}
                </div>
            </div>

            <div className='SafetyTips'>

                <div className="SafetyTop">
                    <h2>Learn to Defence Yourself</h2>
                </div>

                <div className="Safetycontainer">
                    <WomenSafetyVideos />
                </div>
            </div>

            <div className='ComplaintBox'>
                <div className="ComplaintTop">
                   ..
                   .
                   .
                   .<div>
                    ;cmw
                   </div>
                   .
                </div>


            </div>

        </>
    );
};

export default Mainpage;
