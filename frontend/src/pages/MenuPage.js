import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const links = [
    { text: 'Education', onClick: () => navigate('/education') },
    { text: 'Projects', onClick: () => navigate(`/project-menu/${username}`) },
    { text: 'Co - Curricular', onClick: () => navigate('/co-curricular') },
    { text: 'About Me', onClick: () => navigate('/about-me') },
    { text: 'Career', onClick: () => navigate('/career') }
  ];

  return (
    <div className="h-screen w-full bg-black text-white font-customElements px-4 sm:px-10 md:px-16 lg:px-20 py-20">
      <ul className="list-none w-full space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        {links.map((item, index) => (
          <li
            key={index}
            onClick={item.onClick}
            className="relative w-fit text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl py-3 px-4 cursor-pointer group"
          >
            <span className="absolute -left-6 sm:-left-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-white rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-[135deg]"></span>
            {item.text}
          </li>

        ))}
      </ul>

    </div>
  );
};

export default MenuPage;
