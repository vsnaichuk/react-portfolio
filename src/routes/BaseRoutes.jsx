import { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
import Home from '../scenes/Home/Home';
import About from '../scenes/About/About';
import Projects from '../scenes/Projects/Projects';
import Resume from '../scenes/Resume/Resume';
//scenes

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  RESUME: '/resume',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.PROJECTS} component={Projects} />
        <Route path={routes.PROJECT} component={ModalProjectCard} />
        <Route path={routes.RESUME} component={Resume} />
      </Switch>

      {background && (
        <Route path={routes.PROJECT} component={ModalProjectCard} />
      )}
    </>
  );
};

export default BaseRoutes;
