import React from 'react'
import './Info.css';

const Info2 = ({onClose}) => {
    return (
        <div className="mini-popup-overlay1">
            <div className="mini-popup-content1">
                <button className='close-btn' onClick={onClose}>✕</button>
                <div className="cyber-tips">
                    <h4>10 Tips to Stay Safe from Harassment</h4>

                    <ul>
                        <li>
                            <h6>1. Trust Your Instincts</h6>
                            <p>If a person or situation feels uncomfortable, trust your gut and distance yourself.</p>
                        </li>

                        <li>
                            <h6>2. Set Clear Boundaries</h6>
                            <p>Be firm and direct—let others know what behavior is not acceptable to you.</p>
                        </li>

                        <li>
                            <h6>3. Avoid Sharing Personal Information</h6>
                            <p>Don’t reveal private details like your address, workplace, or daily routine publicly.</p>
                        </li>

                        <li>
                            <h6>4. Stay Aware of Your Surroundings</h6>
                            <p>When in public, stay alert and avoid isolated or poorly lit areas.</p>
                        </li>

                        <li>
                            <h6>5. Keep Evidence</h6>
                            <p>Save texts, emails, call logs, or screenshots if you’re being harassed—these can serve as proof later.</p>
                        </li>

                        <li>
                            <h6>6. Block and Report</h6>
                            <p>Block harassers on social media, and report their behavior to platform moderators or authorities.</p>
                        </li>

                        <li>
                            <h6>7. Talk to Someone You Trust</h6>
                            <p>Share what’s happening with a friend, family member, or counselor—don’t deal with it alone.</p>
                        </li>

                        <li>
                            <h6>8. Know Your Rights</h6>
                            <p>Understand local laws regarding harassment and how to file a formal complaint if needed.</p>
                        </li>

                        <li>
                            <h6>9. Secure Your Online Accounts</h6>
                            <p>Use strong passwords and enable two-factor authentication to prevent hacking or impersonation.</p>
                        </li>

                        <li>
                            <h6>10. Seek Professional Help if Needed</h6>
                            <p>If harassment affects your mental or emotional well-being, consider speaking to a counselor or psychologist.</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Info2
