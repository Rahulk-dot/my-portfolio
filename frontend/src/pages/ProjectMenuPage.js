import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectMenuPage = () => {
  const navigate = useNavigate();

  const handleEducationClick = () => {
    navigate('/portfolio-project');
  };

  const handleProjectClick = () => {
    navigate('/portfolio-project');
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
          <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-90"></span>
          Portfolio
        </li>
        <li className="relative text-8xl p-5" onClick={handleProjectClick}>
          <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45"></span>
          FundRaiser.com
        </li>
        <li className="relative text-8xl p-5" onClick={handleCoCurricularClick}>
          <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45"></span>
          BlogPost.com
        </li>
        <li className="relative text-8xl p-5" onClick={handleAboutMeClick}>
          <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45"></span>
          E-commerce Website
        </li>
        <li className="relative text-8xl p-5" onClick={handleCareerClick}>
          <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45"></span>
          FlyAway.com
        </li>
      </ul>
    </div>
  );
};

export default ProjectMenuPage;
