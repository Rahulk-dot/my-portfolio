import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
    const navigate = useNavigate();

    const handleEducationClick = () => {
        navigate('/education');
      };
    
      const handleProjectClick = () => {
        navigate('/project');
      };

      const handleCoCurricularClick = () => {
        navigate('/co-curricular');
      };

      const handleAboutMeClick = () => {
        navigate('/about-me');
      };

      const handleCarrerClick = () => {
        navigate('/carrer');  
      };

  return (
    <div className="h-screen w-full bg-black text-white flex overflow-x-auto items-center font-customElements">
      <ol>
        <li className="text-8xl p-5" onClick={handleEducationClick}>Education</li>
        <li className="text-8xl p-5" onClick={handleProjectClick}>Projects</li>
        <li className="text-8xl p-5" onClick={handleCoCurricularClick}>Co-Curricular</li>
        <li className="text-8xl p-5" onClick={handleAboutMeClick}>About Me</li>
        <li className="text-8xl p-5" onClick={handleCarrerClick}>Carrer</li>
      </ol>
    </div>
  );
};

export default MenuPage;