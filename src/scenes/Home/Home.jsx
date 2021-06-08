import s from './Home.module.scss';
import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';

const Home = () => {
  return (
    <div className={s.home}>
      <MainSection />
      <IntroSection />
    </div>
  );
};

export default Home;
