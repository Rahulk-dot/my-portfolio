import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const navigate = useNavigate();

  const handleEducationClick = () => {
    navigate('/education');
  };

  const handleProjectClick = () => {
    navigate('/project-menu');
  };

  const handleCoCurricularClick = () => {
    navigate('/co-curricular');
  };

  const handleAboutMeClick = () => {
    navigate('/about-me');
  };

  const handleCareerClick = () => {
    navigate('/career');
  };

  return (
    <div className="h-screen w-full bg-black text-white flex overflow-x-auto items-center font-customElements p-20">
      <ul className="list-none">
        <li
          className="relative text-8xl p-5 cursor-pointer"
          onClick={handleEducationClick}
        >
          <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45 transition-transform duration-300 ease-in-out hover:rotate-90"></span>
          Education
        </li>
        <li className="relative text-8xl p-5 cursor-pointer" onClick={handleProjectClick}>
          <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45 transition-transform duration-300 ease-in-out hover:rotate-90"></span>
          Projects
        </li>
        <li className="relative text-8xl p-5 cursor-pointer" onClick={handleCoCurricularClick}>
          <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45 transition-transform duration-300 ease-in-out hover:rotate-90"></span>
          Co - Curricular
        </li>
        <li className="relative text-8xl p-5 cursor-pointer" onClick={handleAboutMeClick}>
          <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45 transition-transform duration-300 ease-in-out hover:rotate-90"></span>
          About Me
        </li>
        <li className="relative text-8xl p-5 cursor-pointer" onClick={handleCareerClick}>
          <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45 transition-transform duration-300 ease-in-out hover:rotate-90"></span>
          Career
        </li>
      </ul>
    </div>
  );
};

export default MenuPage;
