import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaBitbucket,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
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
              My field of Interest's are building new
              <i>
                <b className={s.purple}>
                  {' '}
                  Web Technologies and Products
                </b>
              </i>
            </p>

            <p>
              A passionate Beginner Software Developer 🚀 <br />I
              am Learning Programming Languages{' '}
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
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
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
              href="https://github.com/Debanjan-Mondal"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/debanjan.m2005/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaInstagram />
            </a>
          </li>

          {/*<li className={s.socialLink}>
            <a
              href="https://bitbucket.org/Debanjan-Mondal/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaBitbucket />
            </a>
          </li>
           */}
          <li className={s.socialLink}>
            <a
              href="https://www.youtube.com/c/DebanjanMondalChannel"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaYoutube />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://twitter.com/Debanja68733233"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
