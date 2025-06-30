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
      <section className="h-screen snap-start snap-always bg-black text-white p-10 flex flex-col justify-center items-center">
        <div className=" m-10h-3 flex items-center gap-4">
          <img
            src={projectData.icon}
            alt="project icon"
            className="w-16 h-16 object-contain border-2 border-gray-500"
          />
          <h1 className="text-8xl">{projectData.name}</h1>
        </div>

        <div className="pt-10 pl-10 w-1/2 font-iMFellDoublePica text-3xl">
          <p>{projectData.description}</p>
        </div>
      </section>

      {projectData.information.map((block, index) => (
        <section
          key={index}
          className="h-screen w-full snap-start snap-always bg-black text-white p-10 flex flex-col justify-center items-center"
        >
          <img
            src={block.image}
            alt={`project-info-${index}`}
            className="w-1/2 h-auto object-contain mb-8 border-4 border-gray-500"
          />
          <div className="pt-4 w-1/2 font-iMFellDoublePica text-3xl font-light">
            <p>{block.content}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectPage;