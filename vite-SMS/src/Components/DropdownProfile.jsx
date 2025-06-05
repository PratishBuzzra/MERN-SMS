import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';


const DropdownProfile = () => {
  const {logout, userName} = useContext(AuthContext)
  

  return (
    <div className="absolute right-4 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden animate-slideDown z-50">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <i className="fa-solid fa-user text-xl text-gray-600"></i>
          <h2 className="text-lg font-semibold">{userName}</h2>
        </div>
      </div>

      <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-user text-gray-600"></i>
          <p className="text-sm font-medium text-gray-700">Profile</p>
        </div>
        <span className="text-gray-400">&gt;</span>
      </a>

      <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-gear text-gray-600"></i>
          <p className="text-sm font-medium text-gray-700">Settings</p>
        </div>
        <span className="text-gray-400">&gt;</span>
      </a>

      <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-circle-info text-gray-600"></i>
          <p className="text-sm font-medium text-gray-700">Help & Support</p>
        </div>
        <span className="text-gray-400">&gt;</span>
      </a>

      <a
        href="#"
        onClick={logout}
        className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition"
      >
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-right-from-bracket text-red-500"></i>
          <p className="text-sm font-medium text-red-500">Logout</p>
        </div>
        <span className="text-gray-400">&gt;</span>
      </a>
    </div>
  );
};

export default DropdownProfile;
