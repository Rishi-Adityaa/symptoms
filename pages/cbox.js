import './index.css';
import './cbox.css'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Home() {
    const [userInput, setUserInput] = useState('');
    const [chatLog, setChatLog] = useState([{ role: 'system', content: 'You are chatting with Dr.Symptom!' }]);
    const [loading, setLoading] = useState(false);
    const chatRef = useRef(null); // Reference to the chat log
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (username.trim()) {
            setIsLoggedIn(true);
        }
    };

    const sendMessage = async () => {
        if (!userInput.trim()) return;

        
        setChatLog((prev) => [...prev, { role: 'user', content: userInput }]);
        setLoading(true);

        try {
            const { data } = await axios.post('/api/gemeni', { prompt: userInput });

           
            setChatLog((prev) => [...prev, { role: 'assistant', content: data.text }]);
        } catch (error) {
            setChatLog((prev) => [...prev, { role: 'system', content: 'Error: Could not reach Eden AI' }]);
        } finally {
            setLoading(false);
            setUserInput('');
        }
    };

   
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chatLog]);

    return (
        <main>
            <div className="container">
                                                                                                   {/* Name of chat */}
                <h1>Symptom Checker</h1> 
                {!isLoggedIn ? (
                    <div className="login-form">
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <button onClick={handleLogin}>Login</button>
                    </div>
                ) : (
                    <>
                        <div
                            ref={chatRef}
                            className="chat-log"
                            aria-live="polite"
                        >
                            {chatLog.map((message, index) => (
                                <p key={index}>
                                    <strong>{message.role === 'user' ? 'You: ' : 'Dr.Symptom: '}</strong>
                                    {message.content}
                                </p>
                            ))}
                        </div>
                        <textarea
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type a message..."
                            rows="3"
                            className="input"
                        />
                        <button onClick={sendMessage} disabled={loading} className="send-button">
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </>
                )}
            </div>
        </main>
    );
}
