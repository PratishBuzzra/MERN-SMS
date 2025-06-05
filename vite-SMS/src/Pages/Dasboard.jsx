import React, { useContext, useState, useEffect } from 'react';
import EditStudent from '../StudentManage.jsx/EditStudent';
import AddStudent from '../StudentManage.jsx/AddStudent';
import { AuthContext } from '../Context/AuthContext';
import { StudentContext } from '../Context/StudentContext';
import LogIn from './Login';
import StudentProfileModal from '../Components/StudentProfileModal';

const Dashboard = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const {
    students,
    fetchStudents,
    addStudent,
    updateStudent,
    deleteStudent,
  } = useContext(StudentContext);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [profileStudent, setProfileStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetchAndSetPage();
  }, [currentPage, searchTerm]);

  const fetchAndSetPage = async () => {
    const data = await fetchStudents(searchTerm, currentPage, limit);
    if (data) {
      setTotalPages(data.totalPages);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    const data = await fetchStudents(searchTerm, 1, limit);
    if (data) setTotalPages(data.totalPages);
 
  };

  if (!isLoggedIn) {
    return (
      <div className="p-4">
        <p className="mt-6 text-xl  text-center text-red-600 font-semibold">
          Please log in to access the dashboard.
        </p>
        <LogIn />
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6 max-w-7xl mx-auto">
   
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Student
        </button>

        <button
          onClick={() => {
            setSearchTerm('');
            setCurrentPage(1);
            fetchStudents('', 1, limit).then((data) => {
              if (data) setTotalPages(data.totalPages);
            });
          }}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          View Students
        </button>

        <form
          onSubmit={handleSearch}
          className="flex flex-wrap gap-2 items-center justify-center"
        >
          <input
            type="text"
            placeholder="Search by name or course"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 border rounded w-full sm:w-64"
          />
          
        </form>
      </div>

  
      {showAddModal && (
        <AddStudent onClose={() => setShowAddModal(false)} onAdd={addStudent} />
      )}

   
      {showEditModal && currentStudent && (
        <EditStudent
          student={currentStudent}
          onSave={(updated) => {
            updateStudent(currentStudent._id, updated);
            setShowEditModal(false);
            setCurrentStudent(null);
          }}
          onClose={() => {
            setShowEditModal(false);
            setCurrentStudent(null);
          }}
        />
      )}

     
      {showProfileModal && profileStudent && (
        <StudentProfileModal
          student={profileStudent}
          onClose={() => {
            setShowProfileModal(false);
            setProfileStudent(null);
          }}
        />
      )}


      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Age</th>
              <th className="p-2 text-left">Course</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="border-b">
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.email}</td>
                <td className="p-2">{student.age}</td>
                <td className="p-2">{student.course}</td>
                <td className="p-2 flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => {
                      setCurrentStudent(student);
                      setShowEditModal(true);
                    }}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteStudent(student._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setProfileStudent(student);
                      setShowProfileModal(true);
                    }}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

       
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Previous
          </button>
          <span className="px-3 py-1">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
