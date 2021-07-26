import { lazy, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Preloader from '../components/UIElements/Preloader/Preloader';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import( '../scenes/About/About'));
const Projects = lazy(() => import( '../scenes/Projects/Projects'));
const Resume = lazy(() => import( '../scenes/Resume/Resume'));

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  RESUME: '/resume',
};

const BaseRoutes = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <Switch>
          <Route path={routes.HOME} exact component={Home} />
          <Route path={routes.ABOUT} component={About} />
          <Route path={routes.PROJECTS} component={Projects} />
          <Route path={routes.RESUME} component={Resume} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default BaseRoutes;
