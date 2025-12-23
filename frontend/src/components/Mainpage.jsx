import '@/components/Auth/Login.jsx';
import '@/components/Auth/Signup.jsx';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Css/Mainpage.css';
import Info1 from './Info/Info1';
import Info2 from './Info/Info2';
import Info3 from './Info/Info3';
import WomenSafetyVideos from "./WomenSafetyVideos";
import Blog from './Blog.jsx';
import GetHospital from './GetHospital.jsx';
import { toast } from 'react-toastify';

// Custom Arrow Components

const Mainpage = () => {

    const [openPopup, setOpenPopup] = useState(null);

    const [stories, setStories] = useState([]);

    const [show, setShow] = useState(false);


    

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

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await fetch('http://localhost:3000/api/user/getStories', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });

                const result = await res.json();

                if (result) {
                    setStories(result.stories);
                }
                else {
                    alert('Cannot fetch stories');
                    throw new Error('Cannot fetch Stories');
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchStories();
    }, []);

    const Navigate = useNavigate();

    return (
        <>
            <div className='top'>
                <div className='protecthead'>
                    <h1 style={{fontSize: "1.9rem", fontWeight: "600"}}>Emergencies</h1>
                </div>
                <div className='protect'>
                    <div className="protectbox">
                        <h4 style={{fontSize: "1.1rem", fontWeight: "500"}}>Send SOS! </h4>
                        <img src="/images/SOS2.png" alt="" />
                        <button onClick={onMail}>Send Mail</button>
                    </div>
                    <div className="protectbox">
                        <h4 style={{fontSize: "1.1rem", fontWeight: "500"}}>Nearby Police Station</h4>
                        <img src="/images/police1.jpg" alt="" />
                        <button onClick={() => Navigate('/GetCurrentAddress')}>Get Location</button>
                    </div>
                    <div className="protectbox">
                        <h4 style={{fontSize: "1.1rem", fontWeight: "500"}}>Nearby Hospitals </h4>
                        <img src="/images/an-3d-icon-of-a-hospital-building-free-png.png" alt="" />
                        <button id="a" onClick={() => Navigate('/NearbyHospitals')}>Get Aid</button>
                    </div>
                    <div className="protectbox">
                        <h4 style={{fontSize: "1.1rem", fontWeight: "500"}}>Report Police </h4>
                        <img src="/images/fir-police.jpeg" alt="" />
                        <button id="a"><a href='https://cyberpolice.nic.in/'>Report</a></button>
                    </div>
                    <div className="protectbox">
                        <h4 style={{fontSize: "1.1rem", fontWeight: "500"}}>Report to Us </h4>
                        <img src="/images/Report.png" alt="" />
                        <button id="a">Report us</button>
                    </div>
                </div>

            </div>

            <div className='helpbox'>

                <div className="helptop">
                    <h1 style={{fontSize: "1.8rem", fontWeight: "600"}}>Quick Tips</h1>
                </div>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "60px",margin: "50px 0px 0px 50px"}}>

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

                    <div>
                        <img src="/images/woman-pointing-finger-up-having-idea-looking-inspired-by-genius-thought-mind-map-problem-solving-brainstorming-find-solution-concept-illustration_270158-742.jpg" alt="" height={500} width={500}  />
                    </div>

                    <div className="helpcontainer">
                        <div className="helpbox1" id='helpbox4' onClick={() => setOpenPopup('cyber')}>
                            <p>Assault</p>
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


            </div>

            <div className='SafetyTips'>

                <div className="SafetyTop">
                    <h2 style={{fontSize: "1.8rem", fontWeight: "600"}}>Learn to Defence</h2>
                </div>

                <div className="Safetycontainer">
                    <WomenSafetyVideos />
                </div>
            </div>

            <div className='Blogs'>
                <h1 style={{fontSize: "2rem", fontWeight: "600", marginBottom: "20px" ,color: "#7131ab", }}>SheSafe <span style={{color:"black",fontSize: "1.8rem"}}>Stories</span></h1>
                <div>
                <div className='blogcontainer'>
                    {stories.length === 0 ? <p>No Stories Available</p> :
                        stories.map((story, index) => (
                            <div className='blogbox' key={index}>
                                <div style={{display:"flex" ,flexDirection:"row" ,alignItems:"center" ,gap:"10px"}}>
                                <img src="/images/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866 copy.jpg" alt="" height={30} width={30}/>
                                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",gap:"0px",paddingTop: "10px"}}>
                                    <h6 style={{marginBottom:"0px"}} >Kabir Saini</h6>
                                    <p style={{    fontSize: "smaller"}}>Jalandhar,Punjab</p>
                                </div>

                                </div>
                                <p>{story}</p>
                            </div>
                        ))
                    }
                    <button className="save-btn" onClick={() => setShow(true)}><img src="/images/save.png" className="save-icon" alt="" height={50} width={50} /></button>
                    { show && <Blog onClose={() => setShow(false)} /> }
                </div>

                </div>

                <div className='blogbutton'>

                    {/* <button onClick={() => setShow(true)}><img src="/images/save.png" alt="" height={50} width={50} /></button>
                    { show && <Blog onClose={() => setShow(false)} /> } */}
                    
                </div>
            </div>

        </>
    );
};

export default Mainpage;
