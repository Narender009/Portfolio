// Home Page Component
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';

const Home = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm Narender Rai
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              Full-Stack Developer specializing in React and Node.js
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/235wfasda" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
              <a href="mailto:rainarender1997@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Home;