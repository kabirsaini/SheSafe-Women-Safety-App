import React from 'react';
import Slider from "react-slick";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Css/Mainpage.css';

// Custom Arrow Components
const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev-arrow" onClick={onClick}>
            ❮
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow next-arrow" onClick={onClick}>
            ❯
        </div>
    );
};

const Mainpage = () => {
    const images = [
        "/images/women3.jpeg",
        "/images/women1.jpeg",
        "/images/women4.jpeg",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: true
                }
            },
        ]
    };

    return (
        <>
            {/* Image Slider */}
            <Slide>
                {images.map((img, index) => (
                    <div key={index} className="each-slide-effect">
                        <div className="slide-background" style={{ backgroundImage: `url(${img})` }}>
                        </div>
                    </div>
                ))}
            </Slide>

            {/* Emergency Numbers */}
            <div className="emernumb">
                <div className="telephone">
                    <img src="/images/telephone.jpg" alt="telephone" />
                </div>
                <div className="number">
                    <h6>For any issues related to Violence against women</h6>
                    <p>Call on Helpline: 7827-170-170</p>
                </div>
                <div className="numbers1">
                    <h6>For any Emergency assistance</h6>
                    <p>Call on Women Helpline number: 112</p>
                </div>
            </div>

            {/* NFHS Quote */}
            <div className="container">
                <div className="row">
                    <p class="font-garamond">
                        "Only 14% of women who reported being assaulted actively sought assistance, according to National Family Health Survey (NFHS)"
                    </p>
                </div>
            </div>

            {/* Crimes Around Us */}
            <div className="crime">
                <h1>Crimes Around Us</h1>
                <div className="crimebb">
                    {/* Corrected placement of slider-wrapper */}
                    <div className="slider-wrapper">
                        <Slider {...settings}>
                            <div className="crimebox">
                                <h3>Assault</h3>
                                <img src="/images/women3.jpeg" alt="Assault" />
                                <p>A sudden attack on somebody/something.</p>
                            </div>
                            <div className="crimebox">
                                <h3>Domestic Violence</h3>
                                <img src="/images/women1.jpeg" alt="Domestic Violence" />
                                <p>Physical, emotional, psychological, or sexual abuse by a current or former partner or spouse.</p>
                            </div>
                            <div className="crimebox">
                                <h3>Harassment (Verbal and Sexual)</h3>
                                <img src="/images/women4.jpeg" alt="Harassment" />
                                <p>Unwanted behavior that causes distress or discomfort, such as verbal comments, lewd gestures, or advances.</p>
                            </div>
                            <div className="crimebox">
                                <h3>Harassment (Verbal and Sexual)</h3>
                                <img src="/images/women4.jpeg" alt="Harassment" />
                                <p>Unwanted behavior that causes distress or discomfort, such as verbal comments, lewd gestures, or advances.</p>
                            </div>
                            <div className="crimebox">
                                <h3>Harassment (Verbal and Sexual)</h3>
                                <img src="/images/women4.jpeg" alt="Harassment" />
                                <p>Unwanted behavior that causes distress or discomfort, such as verbal comments, lewd gestures, or advances.</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <div>
                <h1>How to protect yourself?</h1>
                <div className='protect'>
                    <div className="protectbox">
                        <h3>Report to the Police </h3>
                        <img src="/images/fir-police.jpeg" alt="" />
                    </div>
                    <div className="protectbox">
                        <h3>Report to the Police </h3>
                    </div>
                    <div className="protectbox">
                        <h3>Report to the Police </h3>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Mainpage;
