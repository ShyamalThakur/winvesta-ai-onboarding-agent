import React, { useState, useEffect } from 'react';
import { useConversation } from '../hooks/useConversation';

export const ChatInterface: React.FC = () => {
  const [message, setMessage] = useState('');
  const { conversation, sendMessage, isLoading } = useConversation();

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {conversation.map((msg, idx) => (
          <div key={idx} className={`mb-4 ${msg.isBot ? 'text-left' : 'text-right'}`}>
            <div className={`inline-block p-3 rounded-lg ${
              msg.isBot 
                ? 'bg-blue-100 text-blue-900' 
                : 'bg-gray-100 text-gray-900'
            }`}>
              {msg.text}
            </div>
            {msg.options && (
              <div className="mt-2 flex flex-wrap gap-2">
                {msg.options.map((option, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => sendMessage(option)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage(message)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded"
            disabled={isLoading}
          />
          <button
            onClick={() => sendMessage(message)}
            disabled={isLoading || !message.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
