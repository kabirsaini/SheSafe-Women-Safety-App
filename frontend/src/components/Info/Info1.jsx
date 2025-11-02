import React from 'react'
import './Info.css';

const Info1 = ({ onClose }) => {
    return (
        <div className="mini-popup-overlay1">
            <div className="mini-popup-content1">
                <button className='close-btn' onClick={onClose}>✕</button>
                <div className="cyber-tips">
                    <h4>Quick Tips to Stay Safe from Cyberbullying</h4>

                    <ul>
                        <li>
                            <h6>1. Don’t Respond or Engage</h6>
                            <p>Never reply to mean, threatening, or hurtful messages. Responding can make things worse.</p>
                        </li>

                        <li>
                            <h6>2. Block or Report the Bully</h6>
                            <p>Use the “block” or “report” features on social media and messaging apps immediately.</p>
                        </li>

                        <li>
                            <h6>3. Keep Evidence</h6>
                            <p>Take screenshots, save texts, emails, or chat logs. You may need these later for reporting.</p>
                        </li>

                        <li>
                            <h6>4. Protect Your Privacy</h6>
                            <p>
                                Avoid sharing personal details (like address, school, or phone number) publicly.<br />
                                Review privacy settings on all your social accounts.
                            </p>
                        </li>

                        <li>
                            <h6>5. Think Before You Post</h6>
                            <p>Anything shared online can be saved or spread—even if deleted later. Post responsibly.</p>
                        </li>

                        <li>
                            <h6>6. Talk to Someone You Trust</h6>
                            <p>Speak with a parent, teacher, counselor, or friend. You don’t have to handle it alone.</p>
                        </li>

                        <li>
                            <h6>7. Report to Authorities if Needed</h6>
                            <p>If you’re being threatened or harassed seriously, contact local law enforcement or cybercrime helplines.</p>
                        </li>

                        <li>
                            <h6>8. Use Strong Passwords</h6>
                            <p>Don’t share passwords with friends. Use unique passwords for each account.</p>
                        </li>

                        <li>
                            <h6>9. Stay Kind Online</h6>
                            <p>Avoid spreading rumors or hurtful comments about others—kindness reduces online hate.</p>
                        </li>

                        <li>
                            <h6>10. Take a Break</h6>
                            <p>If things get overwhelming, step away from social media for a while to protect your mental health.</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Info1
