import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import ProjectPage from './pages/ProjectPage';
import EducationPage from './pages/EducationPage';
import CoCurricularPage from './pages/CoCurricularPage';
import AboutMePage from './pages/AboutMePage';
import CareerPage from './pages/CareerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/co-curricular" element={<CoCurricularPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
