import { createRoot } from 'react-dom/client';
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

const root = createRoot(document.getElementById('root'));
root.render(<Root />);

reportWebVitals();
serviceWorkerRegistration.register();
