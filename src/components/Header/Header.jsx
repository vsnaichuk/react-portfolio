import cx from 'classnames';
import s from './Header.module.scss';
import { useState } from 'react';

const Header = ({ children }) => {
  const [headerHighlight, setHeaderHighlight] = useState(false);

  const scrollHandler = () => {
    setHeaderHighlight(window.scrollY >= 20);
  };
  window.addEventListener('scroll', scrollHandler);

  return (
    <div
      className={cx(s.header, {
        [s.highlighted]: headerHighlight,
      })}
    >
      <div className={s.container}>{children}</div>
    </div>
  );
};

export default Header;
