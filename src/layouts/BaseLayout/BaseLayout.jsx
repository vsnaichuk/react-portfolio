import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation';
import s from './BaseLayout.module.scss';

const BaseLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header>
        <MainNavigation />
      </Header>

      <div className={s.container}>{children}</div>

      <Footer />
    </div>
  );
};

export default BaseLayout;
