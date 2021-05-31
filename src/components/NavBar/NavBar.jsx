import s from './NavBar.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

const NavBar = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <a className={s.active}>
          <AiOutlineHome />
          Home
        </a>
      </li>

      <li>
        <a>
          <AiOutlineUser />
          About
        </a>
      </li>

      <li>
        <a>
          <AiOutlineFundProjectionScreen />
          Projects
        </a>
      </li>

      <li>
        <a>
          <CgFileDocument />
          Resume
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
