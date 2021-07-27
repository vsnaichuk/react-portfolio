import s from './MainNavigation.module.scss';
import { useState } from 'react';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import Burger from '../Burger/Burger';

const MainNavigation = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <SideDrawer show={isDrawerOpen} onClose={toggleDrawer}>
        <nav className={s.navigationDrawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>

      <Burger onClick={toggleDrawer} />

      <nav className={s.navigationHeaderNav}>
        <NavLinks />
      </nav>
    </>
  );
};

export default MainNavigation;
