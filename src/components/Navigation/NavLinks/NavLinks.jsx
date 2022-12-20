import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} end>
          <AiOutlineHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT}>
          <AiOutlineUser />
          About
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS}>
          <AiOutlineFundProjectionScreen />
          Projects
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.RESUME}>
          <CgFileDocument />
          Resume
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
