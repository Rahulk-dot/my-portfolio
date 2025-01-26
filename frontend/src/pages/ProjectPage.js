import React from 'react';
import PortfolioProjectPage from '../components/PortfolioProjectPage';
const ProjectPage = () => {
  return (
    <div className="h-screen w-full bg-black text-white flex flex-col items-center font-customElements">
      <h1 className="text-8xl mx-auto"> Portfolio </h1>
      <PortfolioProjectPage />
    </div>
  );
};

export default ProjectPage;
