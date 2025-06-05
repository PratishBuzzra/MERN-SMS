
import React, { createContext, useState } from "react";

export const StudentContext = createContext();

const base_url = "https://mern-sms-backend.onrender.com/api";

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async (search = "", page = 1, limit = 10) => {
  try {
    const res = await fetch(
      `${base_url}/student/getstudents?search=${encodeURIComponent(search)}&page=${page}&limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await res.json();
    setStudents(data.students || []);
    return data; 
  } catch (err) {
    console.error("Error fetching students:", err);
  }
};

  const addStudent = async (studentData) => {
    try {
      const res = await fetch(`${base_url}/student/addstudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(studentData),
      });

      const data = await res.json();
      if (res.ok) {
        fetchStudents();
      } else {
        console.error(data.error || "Failed to add student");
      }
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };


  const updateStudent = async (id, updatedData) => {
    try {
      const res = await fetch(`${base_url}/student/updatestudent/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();
      if (res.ok) {
        fetchStudents();
      } else {
        console.error(data.error || "Failed to update student");
      }
    } catch (err) {
      console.error("Error updating student:", err);
    }
  };

  
  const deleteStudent = async (id) => {
    try {
      const res = await fetch(`${base_url}/student/deletestudent/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      const data = await res.json();
      if (res.ok) {
        fetchStudents();
      } else {
        console.error(data.error || "Failed to delete student");
      }
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        fetchStudents,
        addStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
