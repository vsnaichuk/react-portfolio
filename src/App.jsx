import './styles/main.scss';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import HomeScene from './scenes/Home/Home';

const App = () => {
  return (
    <BaseLayout>
      <HomeScene />
    </BaseLayout>
  );
};

export default App;
