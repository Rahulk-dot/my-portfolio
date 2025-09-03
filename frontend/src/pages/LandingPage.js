import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const LandingPage = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const userName = process.env.REACT_APP_USER_NAME;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/user/name/${userName}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const onClickProjects = () => {
    navigate(`/project-menu/${userName}`);
  };

  const onClickAbout = () => {
    navigate('/about-me');
  };

  return (
    <div
      style={{ backgroundImage: "url('/assets/background3.jpg')" }}
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-white flex flex-col justify-start items-start font-customElements relative overflow-x-hidden overflow-y-auto px-4 py-10"
    >
      {userData ? (
        <>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mt-16 mb-4 break-words">
            {userData.name}
          </h1>

          <p className="sm:text-lg md:text-xl text-black bg-gray-500 pl-4 pr-4 font-bold w-3/4 sm:w-1/2">
            {userData.designation}
          </p>

          <p className="text-sm sm:text-base text-gray-300 mt-8 mb-8 max-w-xl pt-6">
            {userData.about}
          </p>

          <div className="w-full mt-10">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Projects Box */}
              <div
                onClick={onClickProjects}
                className="w-full sm:w-[300px] h-[300px] bg-cover bg-center shadow-2xl cursor-pointer flex items-center justify-center relative group transition-all duration-300"
                style={{ backgroundImage: "url('/assets/background4.avif')" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                <p className="relative z-10 text-white text-2xl sm:text-3xl font-extrabold tracking-wide uppercase p-4">
                  View Projects
                </p>
              </div>

              {/* About Me Box */}
              <div
                onClick={onClickAbout}
                className="w-full sm:w-[300px] h-[300px] bg-cover bg-center shadow-2xl cursor-pointer flex items-center justify-center relative group transition-all duration-300"
                style={{ backgroundImage: "url('/assets/aboutme.jpeg')" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                <p className="relative z-10 text-white text-2xl sm:text-3xl font-extrabold tracking-wide uppercase p-4">
                  About Me
                </p>
              </div>

              {/* Contact Box */}
              <div
                className="w-full sm:w-[300px] h-[300px] bg-cover bg-center shadow-2xl cursor-pointer flex items-center justify-center relative group transition-all duration-300"
                style={{ backgroundImage: "url('/assets/background5.jpg')" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                <div className="relative z-10 grid grid-cols-2 gap-8 text-white text-5xl">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/9958600653"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition flex justify-center"
                  >
                    <FaWhatsapp />
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/rahul-kaushik-561435217/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition flex justify-center"
                  >
                    <FaLinkedin />
                  </a>
                  {/* Email */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rahul.kaushik0719@gmail.com"
                    target='_blank'
                    className="hover:text-red-400 transition flex justify-center"
                  >
                    <FaEnvelope />
                  </a>
                  {/* Resume */}
                  <a
                    href="/assets/cv_rahul_1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition flex justify-center"
                  >
                    <FaFileAlt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-white">Loading user data...</p>
      )}
    </div>
  );
};

export default LandingPage;
