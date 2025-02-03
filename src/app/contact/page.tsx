import Button from '@/components/Button';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Portfolio | Contact",
  description: "Contact Page",
};

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f172a] p-4 mt-10">
      <div className="bg-[#112240] p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-white text-2xl font-bold mb-6">Contact Form</h2>

        <form className="space-y-4">
          <div>
            <label className="text-gray-300 block mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-1">Email</label>
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-1">Subject</label>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-1">Message</label>
            <textarea 
              rows={5} 
              placeholder="Your message..." 
              className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border-none focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
          </div>

          <Button
                        variant="default"
                        className="bg-purple-600 hover:bg-purple-700"
                        // onClick={() => router.push('/projects')}
                      >
                        Send Message
                      </Button>
                      
        </form>
      </div>
    </div>
  );
}

export default Contact;
