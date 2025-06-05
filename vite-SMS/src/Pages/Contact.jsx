import React from 'react';



import Constant from '../Components/ConstantHero';


const Contact = () => {
  return (
    <div className="bg-orange-50 pb-12">
      <div className="max-w mx-auto">
      
        <Constant
        constantImg="/SMSIMG/banner01.png"
        title="Get in Touch"
        text="We’re here to help. Reach out with any questions or feedback."
      />


        <h2 className="text-3xl font-bold text-center text-gray-800 my-10">Contact Us</h2>

        <div className="bg-white p-8 rounded-md shadow-md max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-gray-700">Send Us a Message</h3>
          <form className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md "
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md "
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md "
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
