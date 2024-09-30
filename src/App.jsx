import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Preloader from './components/UIElements/Preloader/Preloader';
import BaseRoutes from './routes/BaseRoutes';
import './styles/main.scss';

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <BaseRoutes />
      </Router>
    </Suspense>
  );
};

export default App;
