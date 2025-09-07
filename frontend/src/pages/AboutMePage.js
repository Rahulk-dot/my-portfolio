import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Slider from 'react-slick';

const AboutMePage = () => {
  const location = useLocation();
  const { userData, contactData } = location.state || {};
  const [aboutData, setAboutData] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const aboutRes = await fetch(
          `${API_BASE_URL}/about-me/${userData.username}`
        );
        const aboutJson = await aboutRes.json();
        setAboutData(aboutJson);
      } catch (error) {
        console.error('Error fetching about-me:', error);
      }
    };
    if (userData) fetchAboutMe();
  }, [userData]);

  if (!userData || !aboutData) {
    return (
      <div className="h-screen w-full bg-black text-white flex justify-center items-center font-customElements">
        <p>Loading...</p>
      </div>
    );
  }

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  };

  return (
    <div className="min-h-screen w-full bg-black text-white font-customElements px-4 sm:px-6 py-10 flex flex-col items-center">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mb-10">
        <img
          src={userData.profileImage || '/assets/default-profile.jpg'}
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-4 border-4 border-gray-700"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          {userData.name}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400">
          {userData.designation}
        </p>
      </div>

      {/* About Me Paragraphs */}
      <div className="max-w-3xl text-center sm:text-left mb-12 px-2">
        {aboutData.description.split('\n\n').map((para, idx) => (
          <p
            key={idx}
            className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Sidebar with Icons */}
      {contactData && (
        <div className="fixed top-1/2 right-3 sm:right-6 transform -translate-y-1/2 flex flex-col gap-4 sm:gap-6 text-xl sm:text-2xl md:text-3xl">
          {contactData.github && (
            <a
              title="Visit GitHub Profile"
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
          )}
          {contactData.linkedin && (
            <a
              title="Visit LinkedIn Profile"
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          )}
          {contactData.email && (
            <a
              title="Send Email"
              href={`mailto:${contactData.email}`}
              className="hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>
          )}
          {contactData.phoneNumber && (
            <a
              title="Call Phone Number"
              href={`tel:${contactData.phoneNumber}`}
              className="hover:text-green-400 transition"
            >
              <FaPhone />
            </a>
          )}
        </div>
      )}

      {/* Photo Slideshow */}
      {aboutData.images && aboutData.images.length > 0 && (
        <div className="w-full max-w-3xl mt-16 px-4">
          <Slider {...sliderSettings}>
            {aboutData.images.map((img, idx) => (
              <div key={idx} className="flex justify-center">
                <div className="w-full h-[400px] flex items-center justify-center bg-black">
                  <img
                    src={img}
                    alt={`Me ${idx + 1}`}
                    className="rounded-lg shadow-lg max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default AboutMePage;
