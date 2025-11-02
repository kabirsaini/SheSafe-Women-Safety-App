import React, { useEffect, useState } from "react";
import './Css/WomenSafetyVideos.css';

const WomenSafetyVideos = () => {
    // const [videos, setVideos] = useState([]);
    const API_KEY = "AIzaSyAhJhShrezvHdnO4YKbCGCcpCZDjPT3qAM";
    const searchQuery = "self defence techniques for women";

    // useEffect(() => {
    //     const fetchVideos = async () => {
    //         try {
    //             const response = await fetch(
    //                 `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    //                     searchQuery
    //                 )}&maxResults=8&type=video&key=${API_KEY}`
    //             );
    //             const data = await response.json();
    //             setVideos(data.items || []);
    //         } catch (error) {
    //             console.error("Error fetching YouTube videos:", error);
    //         }
    //     };

    //     fetchVideos();
    // }, [API_KEY]);

    const videos = [
        {
            id: { videoId: "M4_8PoRQP8w" },
            src: "https://youtu.be/M4_8PoRQP8w",
            snippet: { title: "Simple Self Defense Moves You Should Know"}
        },
        {
            id: { videoId: "KVpxP3ZZtAc" },
            src: "https://youtu.be/KVpxP3ZZtAc",
            snippet: {title: "5 Self-Defense Moves Every Woman Should Know"},
        },
        {
            id: { videoId: "pndPbpHLpos" },
            src: "https://youtu.be/pndPbpHLpos?si=rhygP2r2lqEZBrSH",
            snippet: { title: "Self Defense Techniques for Women" },
        },
    ]

    return (
        <div className="VideoContainer">
            {videos.map((video) => (
                <div
                    key={video.id.videoId}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                    <iframe
                        width="300px"
                        height="200"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title={video.snippet.title}
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default WomenSafetyVideos;
