import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ThemeProvider } from './hooks/themeHook/themeContext';

const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

reportWebVitals();
serviceWorkerRegistration.register();
