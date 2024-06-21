import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';

const Chatbot = () => {
  const [language, setLanguage] = useState('en');

  const handleEnd = async ({ steps, values }) => {
    const userMessage = values[values.length - 1];
    try {
      const response = await axios.post('/api/chatbot', { message: userMessage, language });
      const { reply } = response.data;
      alert(reply);
    } catch (error) {
      alert('Sorry, something went wrong. Please try again later.');
    }
  };

  const steps = [
    {
      id: '1',
      message: 'Welcome to Customer Support! How can I help you today?',
      trigger: 'user-message',
    },
    {
      id: 'user-message',
      user: true,
      trigger: 'end',
    },
    {
      id: 'end',
      message: 'Thank you for your message. We will get back to you shortly.',
      end: true,
    },
  ];

  return (
    <div className="App">
      <ChatBot steps={steps} handleEnd={handleEnd} />
      <div className="language-selector">
        <label htmlFor="language">Language:</label>
        <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
    </div>
  );
};

export default Chatbot;