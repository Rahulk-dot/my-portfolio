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
    <div className="h-screen w-full bg-black text-white flex flex-col overflow-x-auto justify-center items-center font-customElements text-8xl p-5">
      <div>
        <h1 className="cursor-pointer" onClick={handleInformationClick}>
          INFORMATION
        </h1>
      </div>
      <div className="flex flex-row items-center">
        <div className="border-2 outline-white h-0 w-60"></div>
        <h2 className="p-4">OR</h2>
        <div className="border-2 outline-white h-0 w-60"></div>
      </div>
      <div>
        <h1 className="cursor-pointer" onClick={handleExperienceClick}>
          EXPERIENCE
        </h1>
      </div>
    </div>
  );
};

export default PrefixProjectPage;
