import React from 'react'
import './Info.css';

const Info3 = ({ onClose }) => {
    return (
        <div className="mini-popup-overlay1">
            <div className="mini-popup-content1">
                <button className='close-btn' onClick={onClose}>✕</button>

                <div className="cyber-tips">
                    <h4>10 Tips to Stay Safe from Domestic Violence</h4>

                    <ul>
                        <li>
                            <h6>1. Prioritize Immediate Safety</h6>
                            <p>If you are in immediate danger, get to a safe place and call emergency services right away.</p>
                        </li>

                        <li>
                            <h6>2. Have a Safety Plan</h6>
                            <p>Plan an escape route, identify safe rooms, and keep essentials ready such as keys and phone.</p>
                        </li>

                        <li>
                            <h6>3. Create an Emergency Bag</h6>
                            <p>Keep ID, money, important documents, medicines, and a change of clothes in a small ready-to-go bag.</p>
                        </li>

                        <li>
                            <h6>4. Tell Trusted People & Set a Code Word</h6>
                            <p>Inform a trusted friend or family member and create a secret code word to signal for help.</p>
                        </li>

                        <li>
                            <h6>5. Keep Records and Evidence Safely</h6>
                            <p>Document incidents, take photos of injuries, and store threatening messages securely.</p>
                        </li>

                        <li>
                            <h6>6. Secure Your Devices & Online Accounts</h6>
                            <p>Change passwords, use two-factor authentication, and disable location sharing if possible.</p>
                        </li>

                        <li>
                            <h6>7. Use Support Services and Shelters</h6>
                            <p>Contact local domestic violence hotlines, shelters, or crisis centers for guidance and safe housing.</p>
                        </li>

                        <li>
                            <h6>8. Know Your Legal Options</h6>
                            <p>Learn about protection orders, police reporting, and free legal aid available for survivors.</p>
                        </li>

                        <li>
                            <h6>9. Protect Children and Pets</h6>
                            <p>Include them in your safety plan and identify safe places they can go during emergencies.</p>
                        </li>

                        <li>
                            <h6>10. Prioritize Health & Emotional Support</h6>
                            <p>Seek medical attention and emotional counseling. Healing takes time — you are not alone.</p>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Info3
