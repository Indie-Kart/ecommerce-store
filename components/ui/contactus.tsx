"use client";

import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Your form submission backend logic can go here

    setName('');
    setEmail('');
    setMessage('');
    toast.success('Message sent successfully!');
  };

  return (
    <div 
      className="relative flex flex-col lg:flex-row justify-center items-start lg:items-center px-4 shadow-md rounded-sm bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/workplace-with-blue-office-supplies_23-2147843328.avif')" }} >
      <div className="absolute inset-0 bg-blue-50 opacity-100 md:bg-white md:opacity-40"></div>
      <div className="relative lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-4">
          Have a question or feedback? Fill out this form and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="relative lg:w-1/2 p-4">
        <form className="space-y-4 shadow-lg rounded-lg p-4 bg-white" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded p-2"
              placeholder='Your Name'
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-2"
              placeholder='Your email'
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded p-2"
              placeholder='Your Message'
              required
            />
          </div>
          <button type="submit" className="bg-neutral-800 text-white py-2 px-4 rounded hover:bg-neutral-900 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;