import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));

export const routes = {
  Home: '/',
  About: '/about',
  Projects: '/projects',
  Project: '/project/:id',
  Resume: '/resume',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.Home} element={<Home />} />
        <Route path={routes.About} element={<About />} />
        <Route path={routes.Projects} element={<Projects />} />
        <Route path={routes.Project} element={<ModalProjectCard />} />
        <Route path={routes.Resume} element={<Resume />} />
      </Routes>

      {background && (
        <Routes>
          <Route path={routes.Project} element={<ModalProjectCard />} />
        </Routes>
      )}
    </>
  );
};

export default BaseRoutes;
