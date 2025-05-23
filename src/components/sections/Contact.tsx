import React, { useState } from 'react';
import { Mail, Phone, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-teal-600" />
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-teal-600 hover:bg-teal-700'
                  } text-white rounded-md transition-colors duration-300 flex items-center justify-center`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
                
                {submitStatus && (
                  <div className={`mt-4 p-3 rounded-md ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800' 
                      : 'bg-red-50 text-red-800'
                  }`}>
                    {submitStatus === 'success' 
                      ? 'Your message has been sent successfully!' 
                      : 'There was an error sending your message. Please try again.'}
                  </div>
                )}
              </form>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-gray-800">Email</h4>
                    <a 
                      href="mailto:vkram8505@gmail.com" 
                      className="text-teal-600 hover:underline"
                    >
                      vkram8505@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-gray-800">Phone</h4>
                    <a 
                      href="tel:+917010078887" 
                      className="text-teal-600 hover:underline"
                    >
                      +91-7010078887
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Open to Opportunities
                  </h4>
                  <p className="text-gray-600">
                    I'm currently open to AI & Data Science opportunities, freelance projects, and collaborations. Feel free to reach out!
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Response Time:</strong> I typically respond to messages within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;