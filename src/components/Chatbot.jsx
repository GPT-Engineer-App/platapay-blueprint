import React from 'react';
import { Bot } from 'lucide-react'; // Import the AI icon
import { X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  const popupwindow = (url, title, w, h) => {
    var left = (screen.width / 2) - (w / 2);
    var top = 100;
    window.open(url, title, 'scrollbars=yes, resizable=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    return false;
  };

  return (
    <div className="relative">
      <button
        className="fixed bottom-20 right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg z-50"
        onClick={toggleChatbot}
      >
        <Bot className="w-8 h-8" /> {/* Use the AI icon with increased size */}
      </button>
      {isOpen && (
        <div
          className="fixed bottom-32 right-4 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-96 z-50 chatbot-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-2 border-b border-gray-300">
            <h2 className="text-lg font-semibold">Platapay Support</h2>
            <button onClick={closeChatbot}>
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="p-4">
            
            <form onSubmit={(e) => { e.preventDefault(); popupwindow('https://www.botlibre.biz/chat?&id=19175269&embedded=true&chatLog=true&facebookLogin=false&showLink=false&application=3264547834311944444&bubble=true&menubar=true&chooseLanguage=true&sendImage=true&background=%23fff&prompt=You+say&send=&css=https://www.botlibre.biz/css/chatlog.css&language=en', 'child', 700, 550); }}>
              <input style={{ color: '#fff', backgroundColor: '#009900', cursor: 'pointer', font: '13px/30px Arial, Helvetica, sans-serif', height: '40px', border: '0', margin: '10px 10px 0 0', fontWeight: 'bold' }} type="submit" name="chat" value="Chat Now" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;