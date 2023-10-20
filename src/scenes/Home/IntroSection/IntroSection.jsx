import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            Me <span className={s.purple}> presento </span>
          </h1>

          <div className={s.description}>
            <p>
              Soy Full Stack Developer recibido en Henry <br /> con
              background en administración.
            </p>

            <p>
              Mis tech skills son{' '}
              <i>
                <b className={s.purple}>
                  HTML, CSS, Javascript, React, Redux, NodeJS,
                  Sequelize, Java, PostgreSQL,
                </b>
              </i>
              <br />
              y otras tecnologías. Tengo experiencia en proyectos
              académicos. <br />
            </p>

            {/* <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>
            </p> */}
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>Contacto</h1>
        <p>
          Sientanse libres de
          <span className={s.purple}> conectar </span> conmigo.
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/JFReales"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          {/* <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/Snaychuk"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/snaichuk_v"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li> */}
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/juan-francisco-reales/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
