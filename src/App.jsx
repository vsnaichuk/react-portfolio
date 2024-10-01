import { BrowserRouter as Router } from 'react-router-dom';
import RootRoutes from './routes/RootRoutes';
import './styles/main.scss';

const App = () => {
  return (
    <Router>
      <RootRoutes />
    </Router>
  );
};

export default App;
