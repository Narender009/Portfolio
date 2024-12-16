import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Share2, Settings, Monitor } from 'lucide-react';
import { Twitter, Facebook, Instagram, Dribbble } from 'lucide-react';

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
      setTypingSpeed(60);
    }
  };


  return (
    <h1 className="text-5xl md:text-7xl font-bold mb-8">
      I'm{' '}
      <span className="relative">
        <span className="after:content-['|'] after:ml-2 after:animate-blink ">
          {text}
        </span>
      </span>
    </h1>
  );
};

const PhotographerPortfolio = () => {
    const timelineData = {
    work: [
      {
        title: "Full stack Web Developer",
        period: "2019 - 2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      },
      {
        title: "Back-End Developer",
        period: "2015 - 2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      },
      {
        title: "UI/UX Designer",
        period: "2013 - 2015",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      }
    ],
    education: [
      {
        title: "Academic Degree",
        period: "2019 - 2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      },
      {
        title: "Bachelor's Degree",
        period: "2015 - 2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      },
      {
        title: "Specialization Course",
        period: "2013 - 2015",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      }
    ]
  };

  const TimelineItem = ({ item }) => (
    <div className="relative pl-8 pb-12">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-3 h-3 bg-red-500 rounded-full"></div>
      {/* Timeline line */}
      <div className="absolute left-[5px] top-3 w-[2px] h-full bg-red-500/20"></div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm rounded">
          {item.period}
        </span>
        <p className="text-gray-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
  const services = [
    {
      icon: <Share2 className="w-8 h-8 text-red-500" />,
      title: "Fast Communication",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore."
    },
    {
      icon: <Settings className="w-8 h-8 text-red-500" />,
      title: "Market Analysis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore."
    },
    {
      icon: <Monitor className="w-8 h-8 text-red-500" />,
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore."
    }
  ];

  const skills = {
    design: [
      { name: "Photoshop", percentage: 90 },
      { name: "Illustrator", percentage: 80 },
      { name: "Figma", percentage: 75 },
      { name: "Adobe XD", percentage: 95 }
    ],
    development: [
      { name: "HTML5 CSS3", percentage: 90 },
      { name: "Javascript", percentage: 80 },
      { name: "React", percentage: 75 },
      { name: "Jquery", percentage: 85 }
    ]
  };

  const SkillBar = ({ skill, percentage }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white">{skill}</span>
        <span className="text-white">{percentage}%</span>
      </div>
      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-red-500 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Dribbble size={20} />, href: '#', label: 'Behance' },
    // Using Dribbble icon as a substitute for Behance since it's similar
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
    <nav
      className={`fixed w-full z-50 px-6 py-4 flex justify-around items-center transition-all duration-300 ${
        scrolled ? " shadow-lg bg-white text-black" : ""
      }`}
    >
      <div className="text-2xl font-bold">
        <span className="text-yellow-400">R</span>
        <span>AI</span>
      </div>

      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#" className="hover:text-yellow-400">
          About
        </a>
        <a href="#" className="hover:text-yellow-400">
          Service
        </a>
        <a href="#" className="hover:text-yellow-400">
          Resume
        </a>
        <a href="#" className="hover:text-yellow-400">
          Portfolio
        </a>
        <a href="#" className="hover:text-yellow-400">
          Blog
        </a>
        <a href="#" className="hover:text-yellow-400">
          Contact
        </a>
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
          <h2 className="text-xl mb-4">WELCOME TO MY PORTFOLIO</h2>
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
      <div className="min-h-screen bg-[#1a1f25] text-white p-8 flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl text-center font-bold mb-16 border-b border-gray-700 pb-4">
          About Me
        </h1>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Image Container */}
          <div className="md:w-1/2">
            <div className="bg-white p-2 rounded-lg shadow-lg  h-[400px]">
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
                I am <span className="text-yellow-400">Narender Rai</span>
              </h2>
              <p className="text-gray-400 uppercase tracking-wider text-sm">
                Web Developer 
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
    <div className="min-h-screen bg-black text-white p-8 flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-16 text-center border-b border-gray-700 pb-4">
          My Service
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#1e242c] p-8 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Icon Container */}
              <div className="bg-[#252a32] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>
      </div>
    </div>
    <div className="min-h-screen bg-[#1a1f25] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-16 text-center border-b border-gray-700 pb-4">
          Work & Eduction
        </h1>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className="space-y-6">
            {timelineData.work.map((item, index) => (
              <TimelineItem key={`work-${index}`} item={item} />
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            {timelineData.education.map((item, index) => (
              <TimelineItem key={`education-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-16 text-center border-b border-gray-700 pb-4">
          My Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Design Skills */}
          <div className="space-y-4">
            {skills.design.map((skill, index) => (
              <SkillBar 
                key={`design-${index}`}
                skill={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>

          {/* Development Skills */}
          <div className="space-y-4">
            {skills.development.map((skill, index) => (
              <SkillBar 
                key={`dev-${index}`}
                skill={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-white text-4xl font-bold mb-12 text-center">
          Get In Touch
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-transparent border-b border-gray-700 text-gray-300 py-2 focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>
            
            <div className="flex-1">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-transparent border-b border-gray-700 text-gray-300 py-2 focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>
          </div>
          
          <div className="w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-700 text-gray-300 py-2 focus:outline-none focus:border-gray-500 transition-colors"
            />
          </div>
          
          <div className="w-full">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full bg-transparent border-b border-gray-700 text-gray-300 py-2 focus:outline-none focus:border-gray-500 transition-colors resize-none"
            />
          </div>
          
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 uppercase text-sm tracking-wider hover:bg-gray-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <footer className="bg-[#0a0a0a] text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          {/* Copyright Text */}
          <div className="text-center text-sm">
            <p className="mb-1">Copyright © 2024 - All Right Reserved.</p>
            <p>Designed by <a href="#" className="hover:text-white transition-colors duration-300">Cute Themes</a></p>
          </div>
        </div>
      </div>
    </footer>
    </div>
    
    
  );
};

export default PhotographerPortfolio;