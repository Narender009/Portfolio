import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    if (!formData.name || !formData.subject || !formData.email || !formData.message) {
      alert('Please fill all fields');
      setStatus('');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        alert('Message sent successfully!');
        setFormData({ name: '', subject: '', email: '', message: '' });
      } else {
        setStatus('error');
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      alert(error.message);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-white text-4xl font-bold mb-20 text-center">
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
                required
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
                required
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
              required
              className="w-full bg-transparent border-b border-gray-700 text-gray-300 py-2 focus:outline-none focus:border-gray-500 transition-colors"
            />
          </div>
          
          <div className="w-full">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={4}
              className="w-full bg-transparent border-b border-gray-700 text-gray-300 py-2 focus:outline-none focus:border-gray-500 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full md:w-auto bg-gray-800 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;