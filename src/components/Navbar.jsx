import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Css/Navbar.css';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleExpand = () => setExpanded(!expanded);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setLoading(false);
                    return;
                }

                const res = await fetch("http://localhost:3000/api/user/me", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) throw new Error("Failed to fetch profile");

                const data = await res.json();
                setUser(data.user);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">SheSafe</div>
            <ul className="navbar-links">
                <li><Link to="/MainPage">Home</Link></li>

                <div className="dropdown-container" ref={dropdownRef}>
                    <button onClick={handleExpand} className="dropdown-button">
                        {loading ? "Loading..." : `Hello ${user ? user.name : "Guest"}`} {expanded ? '⌃' : '⌄'}
                    </button>

                    {expanded && (
                        <div className="dropdown-menu">
                            {user ? (
                                <>
                                    <button
                                        onClick={() => {
                                            navigate("/UpdateRegister");
                                            setExpanded(false);
                                        }}
                                        className="dropdown-item"
                                    >
                                        Contacts
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setExpanded(false);
                                        }}
                                        className="dropdown-item"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => navigate("/login")}
                                    className="dropdown-item"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
