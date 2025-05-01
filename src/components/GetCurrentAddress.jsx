import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Css/GetCurrentAddress.css';

const GetCurrentAddress = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [number, setNumber] = useState('');

    useEffect(() => {
        const fetchText = async () => {
            try {
                const url = 'https://ipinfo.io/json?token=d06a1521465796';
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchText();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { ip, city, region, country, loc } = data || {};

    const headers = {
        headers: {
            Authorization: `Bearer EAAX6RLPdhm8BO2v0YKD1SvaywS4H9KwHViM2P5JJDYWF6EW7jhYmnKta8SjMeSsCLmAtKwzRXpyHel22VNXuVSmKwiy4Ir2D1ZBMUi7ZBH0bwCAzkPrjQ4DPktlqwk7Q1gATtEgZAJGIZCus2rrzNYS2MlVc09DizERWVFempmTT3WfZC5w9GFIlUZC2cuzHjjm2WWmJlEYx8JTFpMCxTKbshUShM1GZCfOI9IZD`,
            Accept: 'application/json',
        },
    };

    const sendMsg = () => {
        console.log("Number is", number);

        const body = {
            messaging_product: "whatsapp",
            to: "91" + number,
            type: "template",
            template: {
                name: "hello_world",
                language: {
                    code: "en_US",
                },
            },
        };

        axios
            .post('https://graph.facebook.com/v15.0/403157379554055/messages', body, headers)
            .then((res) => {
                console.log("Message sent successfully", res);
            })
            .catch((err) => {
                console.log("Error while sending message", err);
            });
    };

    return (
        <>
            <div className='container'>
                <div className="box">
                    <div className="box1">
                        <h3>Your Location</h3>
                        <div className="location">
                            <li><strong>IP:</strong> {ip}</li>
                            <li><strong>City:</strong> {city}</li>
                            <li><strong>Region:</strong> {region}</li>
                            <li><strong>Country:</strong> {country}</li>
                            <li><strong>Location:</strong> {loc}</li>
                        </div>
                    </div>
                    <div className="map">
                        <a href='https://www.google.com/maps/@31.2813593,75.6324465,3075m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D' target='_blank'>
                            <img src="/images/map.jpg" alt="map" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="alertbox">
                <div className="alertcontent">
                    <h3>Feels like in Trouble?</h3>
                    <p>Send SMS at 1 click</p>
                </div>

                <div className="alertmsg">
                    <input
                        onChange={(e) => setNumber(e.target.value)}
                        type="text"
                        className="border"
                        placeholder="Enter phone number"
                    />
                <div>
                    <button  onClick={sendMsg} type="button" class="btn btn-success">Send</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetCurrentAddress;
