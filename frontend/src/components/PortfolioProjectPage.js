import React from 'react';
import flowchart from '../assets/test/flowchart.webp';
import flowchart2 from '../assets/test/flowchart2.png';
import flowchart3 from '../assets/test/flowchart3.png';
import frontend from '../assets/test/frontendpic.png';
import frontend2 from '../assets/test/frontend2.png';
import frontend3 from '../assets/test/frontend3.png';

const PortfolioProjectPage = () => {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll scrollbar-hide font-customElements">
      <section className="h-screen snap-start snap-always bg-black text-white p-10 flex flex-col justify-center items-center">
        <h1 className="text-8xl">Description</h1>
        <div className="pt-10 pl-10 w-1/2 font-iMFellDoublePica text-3xl">
          <p>
            This full-stack portfolio website is a comprehensive showcase of my
            work, combining Node.js, Express.js for the backend, and React.js
            for the frontend. The project highlights my technical capabilities
            in web development, offering a seamless user experience from the
            landing page to the detailed portfolio sections. The portfolio
            serves as a reflection of my passion for coding, design, and
            creating responsive, user-friendly applications.
          </p>
        </div>
      </section>

      <section className="h-screen w-full snap-start snap-always bg-gray-800 text-white p-10 flex flex-col justify-center items-center">
        <h1 className="text-8xl">Key Features</h1>
        <div className="h-[800px] w-1/2 border-white border-solid overflow-auto scroll-smooth">
          <div className="pt-10 pl-10 font-iMFellDoublePica text-3xl">
            <ol className="list-decimal ">
              <li className="p-3">
                Dynamic Content: All content is dynamically generated through
                API calls, ensuring easy updates and scalability. The backend is
                powered by Node.js and Express.js, delivering data to the React
                frontend efficiently.
                <div className="flex flex-row m-5 h-64 justify-center snap-start snap-always">
                  <img className="mr-10" src={flowchart} />
                  <img className="mr-10" src={flowchart2} />
                </div>
              </li>
              <li className="p-3">
                React Frontend: The user interface is built using React,
                allowing for modular, component-based development. Each page is
                designed with responsiveness in mind, ensuring optimal viewing
                experiences across devices, whether mobile or desktop.
                <div className="flex flex-row m-5 h-64 justify-center">
                  <img className="mr-10 border-white border-2" src={frontend} />
                  <img
                    className="mr-10 border-white border-2"
                    src={frontend2}
                  />
                </div>
              </li>
              <li className="p-3">
                Express API Integration: The backend API is created with
                Express.js, offering RESTful endpoints that serve data to the
                frontend. This includes fetching project details, user
                information, and dynamically generated content.
                <div className="flex flex-row m-5 h-64 justify-center">
                  <img className="mr-10" src={flowchart} />
                  <img className="mr-10" src={flowchart2} />
                </div>
              </li>
              <li className="p-3">
                Tailwind CSS for Styling: A modern and sleek design has been
                achieved using Tailwind CSS, making the site highly
                customizable. The typography and color schemes emphasize
                readability and aesthetics, while the custom fonts give it a
                unique look.
                <div className="flex flex-row m-5 h-64 justify-center">
                  <img className="mr-10" src={flowchart} />
                  <img className="mr-10" src={flowchart2} />
                </div>
              </li>
              <li className="p-3">
                Project Showcase Section: The portfolio section dynamically
                renders a grid of project cards, each highlighting a different
                project with descriptions, images, and links to live demos or
                GitHub repositories. For example, this project itself is
                beautifully showcased here as a fully-fledged, production-ready
                web application.
                <div className="flex flex-row m-5 h-64 justify-center">
                  <img className="mr-10" src={flowchart} />
                  <img className="mr-10" src={flowchart2} />
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="h-screen w-full snap-start snap-always bg-gray-600 text-white p-10 flex flex-col justify-center items-center">
        <h1 className="text-8xl">Technologies Used</h1>
        <div className="pt-10 pl-10 w-1/2 font-iMFellDoublePica text-3xl">
          <ul className="list-disc">
            <li className="p-3">Backend: Node.js, Express.js</li>
            <li className="p-3">Frontend: React.js, Tailwind CSS</li>
            <li className="p-3">
              API: RESTful API for communication between frontend and backend
            </li>
            <li className="p-3">Version Control: Git & GitHub</li>
            <li className="p-3">
              Deployment: The app is deployed on a cloud platform (e.g.,
              DigitalOcean or Linode), ensuring scalability and availability.
              <div className="flex flex-row m-5 h-64 justify-center">
                <img className="mr-10" src={flowchart} />
                <img className="mr-10" src={flowchart2} />
                <img className="mr-10" src={flowchart3} />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="h-screen w-full snap-start snap-always bg-gray-400 text-white p-10 flex flex-col justify-center items-center">
        <h1 className="text-8xl">Challenges Overcome</h1>
        <div className="pt-10 pl-10 w-1/2 font-iMFellDoublePica text-3xl">
          <ol className="list-decimal">
            <li className="p-3">
              API Optimization: Managing API calls efficiently while ensuring
              fast load times was crucial for user experience. Implementing
              caching techniques and optimizing query handling helped overcome
              these challenges.
            </li>
            <li className="p-3">
              Cross-Browser Compatibility: Ensuring the site looked perfect on
              different browsers and screen sizes required meticulous testing
              and adaptation. Tailwind CSS was pivotal in making the design
              responsive.
            </li>
          </ol>
        </div>
      </section>

      <section className="h-screen w-full snap-start snap-always bg-gray-200 text-black p-10 flex flex-col justify-center items-center">
        <h1 className="text-8xl">Future Enhancements</h1>
        <div className="pt-10 pl-10 w-1/2 text-3xl font-iMFellDoublePica">
          <ul className="list-disc">
            <li className="p-3">
              Admin Dashboard: Adding an admin panel to manage content directly
              from the website without needing code changes.
            </li>
            <li className="p-3">
              User Authentication: Integrating user login functionality for a
              personalized experience and secure access to private content.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PortfolioProjectPage;
