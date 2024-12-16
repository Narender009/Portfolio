import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

const About = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700 mb-6">
              I am a full-stack developer with expertise in designing and developing web applications. 
              With a strong foundation in both frontend and backend technologies, I create seamless, 
              user-friendly applications that solve real-world problems.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h2>
            <p className="text-gray-700 mb-6">
              Starting with a degree in Mechanical Engineering from GGSIPU, I transitioned into software 
              development, driven by my passion for creating innovative solutions. Currently working at 
              Orange Infotech, I've developed various projects that showcase my skills in React, Node.js, 
              and other modern technologies.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Develop responsive and intuitive user interfaces using React</li>
              <li>Build robust backend services with Node.js and Django</li>
              <li>Design and implement RESTful APIs</li>
              <li>Work with databases like MongoDB and PostgreSQL</li>
              <li>Collaborate with teams to deliver high-quality software solutions</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default About;