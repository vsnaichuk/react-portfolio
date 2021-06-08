import s from './BaseLayout.module.scss';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import NavBar from '../../components/NavBar/NavBar';
import Particles from '../../components/UIElements/Particles/Particles';
import Footer from '../../components/Footer/Footer';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header>
        <Logo />
        <NavBar />
      </Header>

      <div className={s.container}>
        <Particles />
        {children}
      </div>

      <Footer />
    </>
  );
};

export default BaseLayout;
