import React from 'react'
import { useState } from 'react';
import '@components/Css/MiniPopup.css';

const Blog = ({onClose}) => {

    const [story, setStory] = useState("");

    const onSubmit = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!story.trim()) {
                alert("Please enter your story before submitting!");
                return;
            }

            const res = await fetch("http://localhost:3000/api/user/addStory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ story }),
            });

            if (res.ok) {
                alert("Story submitted successfully!");
                setStory(""); // clear input
            } else {
                const err = await res.json();
                alert(err.message || "Submission failed!");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong!");
        }
    };

    return (
        <div>
            <div className="mini-popup-overlay">
                <div className="mini-popup-content">
                    <button className="close-btn" onClick={onClose}>✕</button>
                    <label for="story">Your Story:</label>
                    <textarea id="story" value={story}
                        onChange={(e) => setStory(e.target.value)} name="story" rows="10" cols="80" placeholder="Write your story here..."></textarea>
                    <button onClick={(onSubmit)}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Blog
