import React from 'react';
import { FiArrowRight } from 'react-icons/fi';  // For the arrow icon
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate('/menu');  // Assuming the menu page will be on this route
  };

  return (
<div className="h-screen w-full bg-black text-white flex flex-col justify-center font-customElements">
      <div className="text-left">
        <h1 className="text-9xl font-bold mb-4 pl-10">RAHUL KAUSHIK</h1>
        <p className="text-2xl text-black bg-gray-500 pl-10 w-1/2 font-bold">Backend Developer</p>
      </div>
      <div
        className="absolute bottom-8 right-8 cursor-pointer flex items-center"
        onClick={handleArrowClick}
      >
        <p className="mr-2 text-lg">Go to Menu</p>
        <FiArrowRight size={24} />
      </div>
</div> 
  );
};

export default LandingPage;
