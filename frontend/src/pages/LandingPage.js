import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi'; // For the arrow icon
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [userData, setUserData] = useState(null); // State to store user data
  const navigate = useNavigate();

  // Function to fetch user data by ID using fetch
  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:3001/user/67ec1ff159308f571f1c348e'); // Replace <userId> with the actual user ID
      const data = await response.json(); // Parse the JSON response
      setUserData(data); // Store the data in state
    } catch (error) {
      console.error('Error fetching user data:', error); // Error handling
    }
  };

  // Fetch user data when the component mounts
  useEffect(() => {
    fetchUserData(); // Call the function to fetch data
  }, []);

  const handleArrowClick = () => {
    navigate('/menu'); // Navigate to the menu page
  };

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col justify-center font-customElements">
      {/* Display user data */}
      {userData ? (
              <div className="text-left">
              <h1 className="text-9xl font-bold mb-4 pl-10"> {userData.name} </h1>
              <p className="text-2xl text-black bg-gray-500 pl-10 w-1/2 font-bold">
                {userData.designation}
              </p>
            </div>
      ) : (
        <p className="pl-10 mt-4">Loading user data...</p>
      )}

      <div
        className="absolute bottom-8 right-8 cursor-pointer flex items-center"
        onClick={handleArrowClick}
      >
        <p className="mr-2 text-lg"> Go to Menu </p> <FiArrowRight size={24} />
      </div>
    </div>
  );
};

export default LandingPage;
