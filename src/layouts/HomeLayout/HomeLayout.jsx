import s from './HomeLayout.module.scss';
import Header from '../../components/Header/Header';
import Particles from '../../components/UIElements/Particles/Particles';
import Footer from '../../components/Footer/Footer';
import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation';

const HomeLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Particles />

      <Header>
        <MainNavigation />
      </Header>

      {children}

      <Footer />
    </div>
  );
};

export default HomeLayout;
