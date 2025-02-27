import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Share2, Settings, Monitor, Flower, ShoppingCart  } from 'lucide-react';
import { Twitter, Facebook, Instagram, Dribbble, Linkedin, Github} from 'lucide-react';
import { Send, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';
import axios from "axios";
import ContactForm from './ContactForm';

const TypingHeader = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);


  const words = ['Narender Rai', 'Junior Software Developer'];
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
      <span className="after:content-['|'] after:ml-0.5 after:animate-blink after:font-thin ">
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
        title: "Junior Software Developer",
        company: "Orange Infotech",
        location: "Noida",
        period: "Jan 2024 - Present",
        description: "Developed a responsive React.js frontend, boosting user engagement by 20%.Built and maintained backend services with Node.js and Django for optimal performance.Created RESTful APIs for seamless frontend-backend communication.Integrated third-party APIs and databases to enhance reliability and efficiency.Collaborated with cross-functional teams to implement client-driven features.Conducted code reviews and optimized performance following industry best practices."
      },
      // {
      //   title: "Back-End Developer",
      //   period: "2015 - 2018",
      //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      // },
      // {
      //   title: "UI/UX Designer",
      //   period: "2013 - 2015",
      //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      // }
    ],
    education: [
      {
        title: "Bachelor's Degree",
        period: "2017 - 2021",
        description: "B.Tech in Mechanical"
      },
      // {
      //   title: "Academic Degree",
      //   period: "2019 - 2024",
      //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      // },
      // {
      //   title: "Bachelor's Degree",
      //   period: "2015 - 2018",
      //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      // },
      {
        title: "Specialization Course",
        period: "2015 - 2016",
        description: "CBSE 12TH, Science"
      },
      {
        title: "Secondary Education",
        period: "2013 - 2014",
        description: "CBSE 10TH."
      },
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
        <div className="flex items-center gap-2 text-sm">
          <span className="text-orange-500">{item.company}</span>
          {/* <span className="text-gray-400">•</span> */}
          <span className="text-gray-400">{item.location}</span>
        </div>
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
      icon: <Flower className="w-8 h-8 text-red-500" />,
      title: "Yoga Website",
      description: "I developed a comprehensive Yoga Website leveraging modern technologies to create a seamless user experience and robust functionality. The website caters to yoga enthusiasts, offering class scheduling, booking, and user management features."
    },
    {
      icon: <Monitor className="w-8 h-8 text-red-500" />,
      title: "Movie Website",
      description: "I developed an engaging Movie Website using HTML, CSS, and JavaScript, integrating advanced APIs to deliver a comprehensive platform for discovering and streaming movies and TV shows."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-red-500" />,
      title: "Shopping Website",
      description: "I developed a Shopping Website using Django as the backend framework and PostgreSQL as the database, providing a robust and efficient platform for online shopping. The frontend and backend communicate seamlessly using Axios, ensuring a smooth user experience."
    }
  ];

  const skills = {
    design: [
      { name: "HTML5", percentage: 95 },
      { name: "CSS3", percentage: 85 },
      { name: "Javascript", percentage: 90 },
      { name: "React", percentage: 95 }
    ],
    development: [
      { name: "Node.js", percentage: 95 },
      { name: "Django", percentage: 90 },
      { name: "Mongodb", percentage: 85 },
      { name: "PostgreSQL", percentage: 80 }
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "shadow-lg bg-white text-black" : ""
        }`}
      >
        <div className="text-4xl font-bold">
          <span className="text-yellow-400">R</span>
          <span>AI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#service" className="hover:text-yellow-400">Service</a>
          <a href="#resume" className="hover:text-yellow-400">Resume</a>
          {/* <a href="#" className="hover:text-yellow-400">Portfolio</a>
          <a href="#" className="hover:text-yellow-400">Blog</a> */}
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl font-bold"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-2xl font-bold">
                <span className=" text-yellow-400">R</span>
                <span className="text-black">AI</span>
              </div>
              <button 
                onClick={toggleMenu}
                className="text-4xl font-bold text-black"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-6">
              <a href="#" className="text-gray-800 hover:text-yellow-400 text-lg">
                Home
              </a>
              <a href="#about" className="text-gray-800 hover:text-yellow-400 text-lg">
                About
              </a>
              <a href="#service" className="text-gray-800 hover:text-yellow-400 text-lg">
                Service
              </a>
              <a href="#resume" className="text-gray-800 hover:text-yellow-400 text-lg">
                Resume
              </a>
              {/* <a href="#" className="text-gray-800 hover:text-yellow-400 text-lg">
                Portfolio
              </a>
              <a href="#" className="text-gray-800 hover:text-yellow-400 text-lg">
                Blog
              </a> */}
              <a href="#contact" className="text-gray-800 hover:text-yellow-400 text-lg">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 "
          style={{ 
            backgroundImage: "url('https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg')"
          }} 
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-xl mb-4">WELCOME TO MY PORTFOLIO</h2>
          <TypingHeader />
          
          {/* Social Icons */}
          <div className="flex space-x-6 mb-8">
          <a href="https://www.linkedin.com/in/narenderrai1997/" className="hover:text-yellow-400">
              <div className="w-10 h-10   rounded-full flex items-center justify-center font-bold">
              <Linkedin size={20} />
              </div>
            </a>

            <a href="https://github.com/Narender009" className="hover:text-yellow-400">
              <div className="w-10 h-10  rounded-full flex items-center justify-center font-bold">
              <Github size={20} />
              </div>
            </a>
            
            <a href="#" className="hover:text-yellow-400">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <Facebook size={20} />
          </div>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <div className="w-10 h-10  rounded-full flex items-center justify-center font-bold">
              <Twitter size={20} />
              </div>
            </a>

            <a href="https://dribbble.com/Narenderrai009" className="hover:text-yellow-400">
              <div className="w-10 h-10  rounded-full flex items-center justify-center font-bold">
              <Dribbble size={20} />
              </div>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="bg-orange-600 hover:bg-transparent text-white px-6 py-2 rounded-full border-2 border-transparent hover:border-orange-600 transition-colors duration-300"
              onClick={() => {
                document.getElementById('service').scrollIntoView({ behavior: 'smooth' });
              }}>
              View Work
            </button>
            <button className="bg-orange-600 hover:bg-transparent text-white px-6 py-2 rounded-full border-2 border-transparent hover:border-orange-600 transition-colors duration-300"
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}>
              Hire Me
            </button>

          </div>

          {/* Scroll Down Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-[#1a1f25] rounded-full shadow-lg hover:bg-transparent transition-colors duration-300 p-2 cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <ChevronDown size={24} />
          </div>

        </div>
      </div>
      <div id="about" className="min-h-screen bg-[#1a1f25] text-white p-8 flex flex-col justify-center items-center">
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
                className="w-[600px] h-[385px]"
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
                Junior Software Developer 
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
 Creating interactive and responsive user interfaces using frameworks like HTML, CSS, Javascript, React, and ensuring compatibility across devices and browsers.Building server-side logic, handling business processes, and managing APIs using technologies like Node.js, Django.
            </p>

            <p className="text-gray-300 leading-relaxed">
Designing, implementing, and optimizing databases (SQL or NoSQL) to store and retrieve application data efficiently.Developing and consuming RESTful APIs for seamless communication between the frontend and backend.
            </p>

            <a
              href="Narender_Rai_Developer.pdf" // Replace with the actual file path or URL
              download="Narender_Rai_Developer.pdf" // Sets the default download filename
              className="text-gray-300 px-6 py-3 uppercase text-sm tracking-wider transition-all duration-300"
              style={{
                background: "linear-gradient(to right, #1f2937 50%, transparent 50%)", // gray-800
                transition: "background 0.3s ease", // Smooth transition for background
                display: "inline-block", // Ensure the hover effect works properly
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "linear-gradient(to right, #1f2937 100%, #1f2937 100%)"; // gray-800
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "linear-gradient(to right, #1f2937 50%, transparent 50%)"; // gray-800
              }}
            >
              Download My CV
            </a>


          </div>
        </div>
      </div>
    </div>
    <div id="service" className="min-h-screen bg-black text-white p-8 flex flex-col justify-center items-center">
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
        <div id="resume" className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>
      </div>
    </div>
    <div   className="min-h-screen bg-[#1a1f25] text-white p-8">
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
    <ContactForm/>


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
            <p>Designed by <a href="#" className="hover:text-white transition-colors duration-300">Narender Rai</a></p>
          </div>
        </div>
      </div>
    </footer>
    </div>
    
    
  );
};

export default PhotographerPortfolio;