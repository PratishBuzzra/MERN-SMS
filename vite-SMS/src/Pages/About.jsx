import React from "react";
import Constant from "../Components/ConstantHero";

const About = () => {
  return (
    <div className="bg-orange-50 pb-12">
      <Constant
        constantImg="/SMSIMG/banner01.png"
        title="ABOUT US"
        text="Learn how our Student Management System empowers institutions to stay organized and efficient"
      />

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center mt-12 mb-12 px-4">
        <img
          src="/SMSIMG/learning04.png"
          alt="About"
          className="w-full max-w-[500px] mx-auto rounded-lg shadow-lg object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Welcome to Our Student Management System
          </h2>
          <p className="text-gray-700 mb-6 text-justify">
            Our Student Management System (SMS) was created to streamline how educational institutions manage student data. From enrollment to course tracking and academic performance, SMS provides a centralized, secure platform that simplifies administration and boosts efficiency.
            <br /><br />
            Built with modern technologies, the system enables easy CRUD operations for student records — including name, age, email, and course details. It is especially useful for administrators and educators who need quick access to organized, real-time student data.
            <br /><br />
            Whether you're managing hundreds of students or scaling your institution's digital presence, our SMS ensures accuracy, accountability, and ease of use.
          </p>
          <a
            href="#"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
