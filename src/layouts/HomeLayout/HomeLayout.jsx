import s from './HomeLayout.module.scss';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import NavBar from '../../components/NavBar/NavBar';
import Particles from '../../components/UIElements/Particles/Particles';
import Footer from '../../components/Footer/Footer';

const HomeLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Particles />

      <Header>
        <Logo />
        <NavBar />
      </Header>

      {children}

      <Footer />
    </div>
  );
};

export default HomeLayout;
