import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const StudentProfileModal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-100 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl p-6 space-y-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-3xl text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <div className="flex flex-col items-center text-center space-y-2">
          <FaUserCircle className="text-7xl sm:text-8xl md:text-9xl text-gray-500" />

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            {student.name}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            {student.email}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            <strong>Age:</strong> {student.age}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            <strong>Course:</strong> {student.course}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileModal;
