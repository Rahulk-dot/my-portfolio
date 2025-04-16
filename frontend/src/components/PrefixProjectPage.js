import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrefixProjectPage = () => {
      const navigate = useNavigate();

    const handleInformationClick = () => {
        navigate('/portfolio-project');
      };

      const handleExperienceClick = () => {
        window.open('https://startling-stardust-b132f2.netlify.app/', '_blank');
      };
      


    return (
        <div className="h-screen w-full bg-black text-white flex flex-col overflow-x-auto justify-center items-center font-customElements text-8xl p-5">
            <div><h1 className="cursor-pointer" onClick={handleInformationClick}>INFORMATION</h1></div><br />
            <div className="flex flex-row items-center"><div className="border-2 outline-white h-0 w-60"></div><h2 className='p-4'>OR</h2><div className="border-2 outline-white h-0 w-60"></div></div>
            <div><h1 className="cursor-pointer" onClick={handleExperienceClick}>EXPERIENCE</h1></div>
        </div>
    );
};

export default PrefixProjectPage;