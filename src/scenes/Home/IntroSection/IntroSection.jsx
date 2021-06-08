import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const IntroSection = () => {
  return (
    <section className={s.introContent}>
      <div className={s.introWrapper}>
        <div className={s.introText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I fell in love with programming and I have at least
              learnt something, I think… 🤷‍♂️
            </p>

            <p>
              My field of Interest's are building new &nbsp;
              <i>
                <b className={s.purple}>
                  Web Technologies and Products
                </b>
              </i>
            </p>

            <p>
              A passionate Full Stack Software Developer 🚀 <br />I
              have an experience of building &nbsp;
              <i>
                <b className={s.purple}>Web and Mobile</b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.purple}>
                  JavaScript, Reactjs, Nodejs, React Native
                </b>
              </i>{' '}
              and some other cool libraries
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <div className={s.myAvatar}>
            <img src={avatar} alt="avatar" />
          </div>
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
