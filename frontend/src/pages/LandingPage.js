import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const userName = process.env.REACT_APP_USER_NAME;

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/name/${userName}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleArrowClick = () => {
    navigate('/menu');
  };

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col justify-center  font-customElements relative overflow-hidden">
      {userData ? (
        <div className="text-left">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 break-words px-4 sm:px-10">
            {userData.name}
          </h1>
          <p className="sm:text-lg md:text-xl text-black bg-gray-500 pl-4 pr-4 font-bold w-3/4">
            {userData.designation}
          </p>
        </div>
      ) : (
        <p className="mt-4">Loading user data...</p>
      )}

      <div
        className="absolute bottom-6 right-4 sm:right-8 cursor-pointer flex items-center"
        onClick={handleArrowClick}
      >
        <p className="mr-2 text-sm sm:text-base">Go to Menu</p>
        <FiArrowRight size={20} />
      </div>
    </div>
  );
};

export default LandingPage;
