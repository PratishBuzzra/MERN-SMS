import React, { useState, useEffect } from 'react';

const EditStudent = ({ student, onSave, onClose }) => {
  const [editedStudent, setEditedStudent] = useState({ ...student });

  useEffect(() => {
    setEditedStudent(student);
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prev) => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedStudent);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="max-w-xl w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Student</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={editedStudent.name || ''}
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
              value={editedStudent.email || ''}
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
              value={editedStudent.age || ''}
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
              value={editedStudent.course || ''}
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
