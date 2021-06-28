// import s from './Home.module.scss';
import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';

const Home = () => {
  return (
    <BaseLayout>
      <MainSection />
      <IntroSection />
    </BaseLayout>
  );
};

export default Home;
