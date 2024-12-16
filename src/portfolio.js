import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const TypingHeader = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Narender Rai', 'Developer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <h1 className="text-5xl md:text-7xl font-bold mb-8">
      I'm{' '}
      <span className="relative">
        <span className="after:content-['|'] after:ml-2 after:animate-blink">
          {text}
        </span>
      </span>
    </h1>
  );
};

const PhotographerPortfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-yellow-400">R</span>
          <span>AI</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">About</a>
          <a href="#" className="hover:text-yellow-400">Service</a>
          <a href="#" className="hover:text-yellow-400">Resume</a>
          <a href="#" className="hover:text-yellow-400">Portfolio</a>
          <a href="#" className="hover:text-yellow-400">Blog</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 "
          style={{ 
            backgroundImage: "url('WhatsApp Image 2024-11-23 at 12.51.45 PM.jpeg')"
          }} 
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-xl mb-4">WELCOME TO MY WEBSITE</h2>
          <TypingHeader />
          
          {/* Social Icons */}
          <div className="flex space-x-6 mb-8">
            <a href="#" className="hover:text-yellow-400">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                f
              </div>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                t
              </div>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                in
              </div>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                Be
              </div>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                Dr
              </div>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
              View Work
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
              Hire Me
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#1a1f25] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl text-center font-bold mb-16 border-b border-gray-700 pb-4">
          About Me
        </h1>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Image Container */}
          <div className="md:w-1/2">
            <div className="bg-white p-2 rounded-lg shadow-lg transform rotate-2 h-[480px]">
              <img 
                src="WhatsApp Image 2024-11-23 at 12.51.45 PM.jpeg"
                alt="Profile" 
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">
                I am <span className="text-yellow-400">Lavina</span>
              </h2>
              <p className="text-gray-400 uppercase tracking-wider text-sm">
                Web Developer & Photographer
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <button className="bg-transparent border border-gray-600 text-gray-300 px-6 py-3 
                             hover:bg-gray-800 transition-colors duration-300 uppercase text-sm 
                             tracking-wider">
              Download My CV
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default PhotographerPortfolio;