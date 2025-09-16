import React from 'react'
import './Css/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
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
        </div>
    )
}

export default Footer
