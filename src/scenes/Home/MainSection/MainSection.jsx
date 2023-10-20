import s from './MainSection.module.scss';
import homeMainIcon from '../../../assets/home-main.svg';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Buenas! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          Soy
          <strong className={s.mainName}>
            {' '}
            Juan Francisco Reales
          </strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'Aprendiendo continuamente',
              'Full Stack Developer',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
        width="396"
        height="400"
      />
    </section>
  );
};

export default MainSection;
