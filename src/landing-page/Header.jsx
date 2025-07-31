import React, { useState } from 'react';

function Header({ onLoginClick, onSignupClick, onAboutClick, onBackClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hi! 👋 How can I help you today?',
      timestamp: new Date()
    }
  ]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatHistory.length + 1,
        type: 'user',
        message: chatMessage,
        timestamp: new Date()
      };
      
      setChatHistory([...chatHistory, newMessage]);
      setChatMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: chatHistory.length + 2,
          type: 'bot',
          message: 'Thanks for your message! Our team will get back to you soon. In the meantime, you can explore our platform or check out our FAQ section.',
          timestamp: new Date()
        };
        setChatHistory(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Back Button */}
            <div className="flex items-center gap-4">
              {onBackClick && (
                <button 
                  onClick={onBackClick}
                  className="flex items-center gap-2 text-white hover:text-indigo-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm font-medium">Back</span>
                </button>
              )}
                             <div className="flex-shrink-0">
                 <h1 className="text-xl sm:text-2xl font-bold text-white">
                   UpGenz
                 </h1>
               </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {!onBackClick && (
                <>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('explore')}
                    className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                  >
                    Explore
                  </button>
                  <button 
                    onClick={() => scrollToSection('mentors')}
                    className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                  >
                    Mentors
                  </button>
                  <button 
                    onClick={() => scrollToSection('interests')}
                    className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                  >
                    Interests
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                  >
                    Contact
                  </button>
                  <button 
                    onClick={onAboutClick}
                    className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                  >
                    About
                  </button>
                 
                </>
              )}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {!onBackClick && (
                <>
                  <button 
                    onClick={() => setIsChatOpen(true)}
                    className="text-white hover:text-indigo-200 transition-colors duration-200 relative"
                    title="Chat with us"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {/* Notification dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">U</span>
                    </div>
                  </div>

                  <button 
                    onClick={onLoginClick}
                    className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200"
                  >
                    Login
                  </button>
                  <button 
                    onClick={onSignupClick}
                    className="bg-white text-indigo-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-indigo-200 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && !onBackClick && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 rounded-lg mt-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('explore')}
                  className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                >
                  Explore
                </button>
                <button 
                  onClick={() => scrollToSection('mentors')}
                  className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                >
                  Mentors
                </button>
                <button 
                  onClick={() => scrollToSection('interests')}
                  className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                >
                  Interests
                </button>
                <button 
                  onClick={onAboutClick}
                  className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                >
                  Contact
                </button>
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium"
                >
                  Chat with us
                </button>
                <div className="pt-4 pb-3 border-t border-white/20">
                  <div className="flex items-center px-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">U</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-white text-sm font-medium">User</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <button 
                      onClick={onLoginClick}
                      className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 text-sm"
                    >
                      Login
                    </button>
                    <button 
                      onClick={onSignupClick}
                      className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 text-sm"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsChatOpen(false)}
          ></div>
          
          {/* Chat Window */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 h-96 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">UpGenz Support</h3>
                    <p className="text-sm text-indigo-100">We're here to help!</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:text-indigo-200 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatHistory.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.message}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!chatMessage.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Header;

