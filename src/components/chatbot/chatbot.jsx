import React, { useState } from 'react';
import axios from 'axios';
import chatbotBanner from '../../assets/logo/chatbotBanner.png';
import userPromptImg from '../../assets/icons/user_prompt.png';
import sendBotImg from '../../assets/icons/Sendbot.png';

export default function Chatbot() {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new URLSearchParams();
      formData.append('query', inputText);

      const response = await axios.post('http://3.134.35.69/api/', formData.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const botResponse = response.data.response;
      setChatHistory([...chatHistory, { type: 'user', text: inputText }, { type: 'bot', text: botResponse }]);
      setInputText('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chatbot_main_container bg-image">
      <div className="overlay">
        <div className="banner flex justify-center items-center mt-12 mb-12">
          <div className="banner-img">
            <img src={chatbotBanner} alt="Loading failed" className='h-auto max-w-full'/>
          </div>
        </div>
        <div className="chatarea my-5 flex justify-center">
          <div className="chats" style={{marginBottom: '80px'}}>
            {chatHistory.map((chat, index) => (
              <div key={index} className={chat.type === 'user' ? "userchat flex items-end justify-end mb-7" : "botchat flex items-end justify-start mb-4"}>
                <div className={chat.type === 'user' ? "userchat-bg" : "botchat-bg"}>
                  <div className={chat.type === 'user' ? "userchat-text" : "botchat-text"}>
                    <p className="m-0">{chat.text}</p>
                  </div>
                </div>
                {chat.type === 'user' &&
                  <div className={chat.type === 'user' ? "userchat-img ms-2" : "botchat-img mr-2"}>
                    <img src={userPromptImg} alt="Loading failed"/>
                  </div>
                }
              </div>
            ))}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="promptarea">
                <div className="prompt fixed bottom-0 left-1/2 transform -translate-x-1/2 flex py-3 border-2 border-white w-full">
                  <div className="prompt-input-btn flex items-center justify-center w-full">
                    <div className="prompt-input w-2/3">
                      <input
                        type="text"
                        name="prompt"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="p-3 w-full"
                        placeholder="Type a new message here..."
                        required
                      />
                    </div>
                    <div className="prompt-btn">
                      <button type="submit" className="submit-btn py-2 px-5 me-2 font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <img src={sendBotImg} alt="Unable to load" className="img-fluid"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
