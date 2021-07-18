import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
//scenes
import Home from '../scenes/Home/Home';
import About from '../scenes/About/About';
import Projects from '../scenes/Projects/Projects';

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  RESUME: '/resume',
};

const BaseRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.PROJECTS} component={Projects} />
        {/*<Route path={routes.RESUME} component={Resume} />*/}
      </Switch>
    </Router>
  );
};

export default BaseRoutes;
