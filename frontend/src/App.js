import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import ProjectPage from './pages/ProjectPage';
import EducationPage from './pages/EducationPage';
import CoCurricularPage from './pages/CoCurricularPage';
import AboutMePage from './pages/AboutMePage';
import CareerPage from './pages/CareerPage';
import PortfolioProjectPage from './components/PortfolioProjectPage';
import ProjectMenuPage from './pages/ProjectMenuPage';
import PrefixProjectPage from './components/PrefixProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu/:username" element={<MenuPage />} />
        <Route path="/project/:project_uuid" element={<ProjectPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/co-curricular" element={<CoCurricularPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/portfolio-project" element={<PortfolioProjectPage />} />
        <Route path="/project-menu/:username" element={<ProjectMenuPage />} />
        <Route
          path="/info-or-experience/:project_uuid"
          element={<PrefixProjectPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
