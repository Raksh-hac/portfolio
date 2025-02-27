import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '../assets/Images/Profile.jpeg';
import { XIcon } from '@heroicons/react/solid';
import { TextGenerateEffect } from '../ui/TextGenrate';

function useLocalTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

function Contact({ onClose }) {
  const time = useLocalTime();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black text-white z-50 pt-16 flex flex-col p-3"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 40 }}
    >
      {/* Navbar */}
      <nav className="fixed z-50 top-0 left-0 w-full flex justify-between items-center p-3 bg-black text-white border-b-[0.5px] border-gray-500">
        <div className="text-md font-bold">{time}</div>
        <button className="rounded-full px-4 py-2 border-2 border-white text-sm hover:border-white hover:bg-white hover:font-bold hover:text-black transition-all duration-200">
          Schedule Call
        </button>
      </nav>

      {/* Main Content */}
      <div className="mt-20 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-20">
        <button onClick={onClose} className="text-white">
          <XIcon className="w-8 h-8" />
        </button>

        {/* Form Section */}
        <form
          onSubmit={handleFormSubmit}
          className="w-full lg:w-1/2 flex flex-col space-y-6 p-4 bg-transparent"
        >
          <h1 className="uppercase text-4xl lg:text-5xl font-semibold">
            Say hello!
          </h1>
          <TextGenerateEffect
            words="My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard."
            className="text-slate-400 text-lg lg:text-2xl font-semibold"
            filter={true}
            duration={0.4}
          />
          <h3 className="uppercase text-md lg:text-xl font-semibold mt-6">
            Fill this form out
          </h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-zinc-900 h-14 lg:h-20 rounded-xl pl-5 lg:pl-10 text-lg font-semibold"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-zinc-900 h-14 lg:h-20 rounded-xl pl-5 lg:pl-10 text-lg font-semibold"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="w-full bg-zinc-900 h-28 lg:h-36 rounded-xl pl-5 lg:pl-10 pt-3 lg:pt-5 text-lg font-semibold"
          />
          <button
            type="submit"
            className="w-full h-12 lg:h-16 rounded-xl bg-white text-black text-lg font-semibold hover:bg-slate-300"
          >
            Submit
          </button>
        </form>

        {/* Image Section */}
        <img
          src={ProfileImage}
          alt="Vikash Yadav"
          className="w-full lg:w-2/3 max-w-sm h-full rounded-xl object-cover"
        />
      </div>
    </motion.div>
  );
}

export default Contact;
