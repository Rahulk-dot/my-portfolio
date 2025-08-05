import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectMenuPage = () => {
  const [projectData, setProjectData] = useState([]);
  const navigate = useNavigate();
  const { username } = useParams();
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/project/all/${username}`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [username]);

  const handleProjectClick = (project_uuid, site_link) => {
    navigate(
      `/info-or-experience/${project_uuid}?site=${encodeURIComponent(site_link)}`
    );
  };

  return (
    <div className="min-h-screen w-full bg-black text-white p-10 flex flex-wrap gap-10 justify-center items-start font-customElements">
      {projectData.map((project) => (
        <div
          key={project.project_uuid}
          className="bg-gray-500 p-4 cursor-pointer transition transform hover:scale-105"
          onClick={() =>
            handleProjectClick(project.project_uuid, project.site_link)
          }
          style={{ width: '300px' }}
        >
          <div
            className="bg-black p-4 flex justify-center items-center"
            style={{ height: '200px' }}
          >
            <img
              src={project.icon}
              alt={project.name}
              className="w-16 h-16 object-contain max-h-full border-4 border-gray-500 p-2"
            />
          </div>
          <h2 className="text-black text-center text-xl mt-4 font-semibold">
            {project.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ProjectMenuPage;
