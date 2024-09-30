import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';

const Home = () => {
  return (
    <HomeLayout>
      <MainSection />
      <IntroSection />
    </HomeLayout>
  );
};

export default Home;
