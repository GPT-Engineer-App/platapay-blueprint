import React, { useState } from 'react';
import { Bot } from 'lucide-react'; // Import the AI icon
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';
import { X } from 'lucide-react';

const Chatbot = () => {
  const [language, setLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="fixed bottom-20 right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg z-50" // Increased padding for bigger size
        onClick={toggleChatbot}
      >
        <Bot className="w-8 h-8" /> {/* Use the AI icon with increased size */}
      </button>
      {isOpen && (
        <div
          className="fixed bottom-32 right-4 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-96 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-2 border-b border-gray-300">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button onClick={closeChatbot}>
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <ChatBot steps={steps} handleEnd={handleEnd} />
          <div className="p-2">
            <label htmlFor="language">Language:</label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="ml-2 border border-gray-300 rounded p-1"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;