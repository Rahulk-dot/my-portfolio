import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { project_uuid } = useParams();
  const [projectData, setProjectData] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/project/${project_uuid}`);
        if (!response.ok) {
          throw new Error('Failed to fetch project');
        }
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [project_uuid]);

  if (!projectData) {
    return <div className="text-white text-center mt-20">Loading project...</div>;
  }

  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll scrollbar-hide font-customElements">
      
      {/* First Slide */}
      <section className="h-screen snap-start snap-always bg-black text-white p-6 sm:p-10 flex flex-col justify-center items-center">
        <div className="flex items-center gap-4 flex-wrap justify-center mb-10">
          <img
            src={projectData.icon}
            alt="project icon"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain border-2 border-gray-500"
          />
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center">{projectData.name}</h1>
        </div>
        <div className="w-full max-w-5xl px-4 font-iMFellDoublePica text-lg sm:text-2xl md:text-3xl text-center">
          <p>{projectData.description}</p>
        </div>
      </section>

      {/* Info Slides */}
      {projectData.information.map((block, index) => (
        <section
          key={index}
          className="h-screen snap-start snap-always bg-black text-white p-6 sm:p-10 flex flex-col justify-center items-center"
        >
          <img
            src={block.image}
            alt={`project-info-${index}`}
            className="w-full max-w-3xl h-auto object-contain mb-8 border-4 border-gray-500"
          />
          <div className="w-full max-w-4xl px-4 font-iMFellDoublePica text-lg sm:text-2xl md:text-3xl font-light text-center">
            <p>{block.content}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectPage;
