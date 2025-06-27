import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const navigate = useNavigate();

  const links = [
    { text: 'Education', onClick: () => navigate('/education') },
    { text: 'Projects', onClick: () => navigate('/project-menu') },
    { text: 'Co - Curricular', onClick: () => navigate('/co-curricular') },
    { text: 'About Me', onClick: () => navigate('/about-me') },
    { text: 'Career', onClick: () => navigate('/career') }
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white font-customElements px-4 sm:px-10 md:px-16 lg:px-20 py-20">
      <ul className="list-none w-full space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        {links.map((item, index) => (
          <li
            key={index}
            className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl py-3 px-4 cursor-pointer transition duration-300 ease-in-out"
            onClick={item.onClick}
          >
            <span className="absolute -left-6 sm:-left-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-white rotate-45 hover:rotate-90 transition-transform duration-300 ease-in-out"></span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
