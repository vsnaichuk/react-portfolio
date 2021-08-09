import s from './MainSection.module.scss';
import homeMainIcon from '../../../assets/home-main.svg';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Hi There! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> SNAYCHUK VOLODUMUR</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'MERN Stack Developer',
              'Continuously Learning',
              'React Native Developer',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <div className={s.homeMainIcon}>
        <img src={homeMainIcon} alt="home-img" />
      </div>
    </section>
  );
};

export default MainSection;
