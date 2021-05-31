import cx from 'classnames';
import s from './Footer.module.scss';
import { useState } from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
  FaLinkedinIn,
} from 'react-icons/all';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Snaichuk Volodumur</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} SB</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/"
                style={{ color: 'white' }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                style={{ color: 'white' }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                style={{ color: 'white' }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                style={{ color: 'white' }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
