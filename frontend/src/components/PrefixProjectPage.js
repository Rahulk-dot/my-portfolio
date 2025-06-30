import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const PrefixProjectPage = () => {
  const navigate = useNavigate();
  const { project_uuid } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const siteLink = query.get('site');

  const handleInformationClick = () => {
    navigate(`/project/${project_uuid}`);
  };

  const handleExperienceClick = () => {
    window.open(siteLink, '_blank');
  };

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col justify-center items-center font-customElements px-4 py-10 sm:px-6 md:px-10 lg:px-20">
      <div className="mb-10">
        <h1 className="cursor-pointer text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center" onClick={handleInformationClick}>
          INFORMATION
        </h1>
      </div>

      <div className="flex items-center w-full justify-center mb-10">
        <div className="border-2 border-white w-24 sm:w-40 md:w-60 h-0"></div>
        <h2 className="px-4 text-xl sm:text-2xl md:text-3xl">OR</h2>
        <div className="border-2 border-white w-24 sm:w-40 md:w-60 h-0"></div>
      </div>

      <div>
        <h1
          className="cursor-pointer text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center"
          onClick={handleExperienceClick}
        >
          EXPERIENCE
        </h1>
      </div>
    </div>
  );
};

export default PrefixProjectPage;
