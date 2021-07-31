import s from './BaseLayout.module.scss';
import Header from '../../components/Header/Header';
import Particles from '../../components/UIElements/Particles/Particles';
import Footer from '../../components/Footer/Footer';
import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation';

const BaseLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Particles />

      <Header>
        <MainNavigation />
      </Header>

      <div className={s.container}>{children}</div>

      <Footer />
    </div>
  );
};

export default BaseLayout;
