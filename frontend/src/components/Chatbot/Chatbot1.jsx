import '@components/Css/Chatbot1.css';
import React, { useEffect, useRef, useState } from 'react';
import ChatForm from './ChatForm.jsx';
import ChatMessage from './ChatMessage.jsx';
import ChatbotIcon from './ChatbotIcon.jsx';
import  {AppInfo}  from './AppInfo.js';

const Chatbot1 = () => {
    const [chatHistory, setChatHistory] = useState([{
        hideInChat: true,
        role: "model",
        text: AppInfo
    }

    ]);
    const [showChatbot, setShowChatbot] = useState(false);
    const chatBodyRef = useRef();

    const generateBotResponse = async (history) => {

        //Updating Chat history
        const updateHistory = async (text, isError=false) => {
            setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking.."), { role: "model", text ,isError}]);
        }

        history = history.map(({ role, text }) => ({
            role,
            parts: [{ text }]
        }));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: history })
        }
        try {
            const API_URL = import.meta.env.VITE_GEMINI_API;
            const response = await fetch(API_URL, requestOptions);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error.message || 'Error fetching bot response');
            }

            //Cleaned up response text by removing markdown bold syntax
            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            updateHistory(apiResponseText);
        }
        catch (error) {
            updateHistory(error.message,true);
        }
    };

    useEffect(() => {
        chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }, [chatHistory]);

    return (
        <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
            <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
                <span className="material-symbols-rounded">
                    {showChatbot ? "close" : "mode_comment"}
                </span>
            </button>

            <div className="chatbot-popup" >
                {/* Chat Header */}
                < div className="chat-header">
                    <div className="header-info" >
                        < ChatbotIcon />
                        <h2 className="logo-text" >Chatbot</h2>
                    </div>

                    <button className="material-symbols-rounded" onClick={() => setShowChatbot(prev => !prev)} >keyBoard_Arrow_down</button>
                </ div >

                <div ref={chatBodyRef} className="chat-body">
                    <div className="message bot-message">
                        <ChatbotIcon />
                        <p className="message-text">
                            Hey There How can I help you today?
                        </p>
                    </div>

                    {chatHistory.map((chat, index) => (
                        <ChatMessage key={index} chat={chat} />
                    ))}
                </div>

                <div className="chat-footer">
                    <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                </div>
            </ div >
        </div>
    )
}

export default Chatbot1
