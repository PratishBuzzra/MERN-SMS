import React, { useState } from 'react';

const AddStudent = ({ onClose, onAdd }) => {
  const [student, setStudent] = useState({ name: '', email: '', age: '', course: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: name === 'age' ? Number(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(student);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="max-w-xl w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Student</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Age</label>
            <input
              type="number"
              name="age"
              value={student.age}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
              min={0}
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Course</label>
            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
