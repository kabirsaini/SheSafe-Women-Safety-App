import React, { useRef } from 'react';

const ChatForm = ({chatHistory,setChatHistory,generateBotResponse}) => {
    const inputRef=useRef();

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const userMessage=inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value='';

        //Update chat history with user message
        setChatHistory(history => [...history, {role: "user", text: userMessage}]);

        setTimeout(()=>{
            //Add a thinking placeholder for the bots response
            setChatHistory(history => [...history, {role: "model", text: "Thinking.."}]);
            //Call the function to generate bots reposne based on users messagge
            generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);
        },300);
        
    }
    return (
        <div>
            <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
                <input ref={inputRef} type="text" placeholder='Message...' className='message-input' required />
            <button className='material-symbols-rounded'> arrow_upward </button>
            </form>
        </div>
    )
}

export default ChatForm
