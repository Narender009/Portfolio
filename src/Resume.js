import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

// Resume Page Component
const Resume = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download size={20} />
              Download CV
            </button>
          </div>
          
          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Junior Software Developer</h3>
                    <p className="text-gray-600">Orange Infotech</p>
                  </div>
                  <p className="text-gray-600">January 2024 - Present</p>
                </div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>• Developed responsive frontend in React</li>
                  <li>• Maintained backend services using Node.js and Django</li>
                  <li>• Implemented RESTful APIs</li>
                  <li>• Integrated third-party services and databases</li>
                </ul>
              </div>
            </div>
          </section>
  
          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">B.Tech in Mechanical Engineering</h3>
                  <p className="text-gray-600">GGSIPU, Delhi</p>
                </div>
                <p className="text-gray-600">Aug 2017 - Sep 2021</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };

export default Resume;