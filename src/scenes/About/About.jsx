import aboutPromoImg from '../../assets/about-promo.svg';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './About.module.scss';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import GithubActivity from './GithubActivity/GithubActivity';
import TechSkills from './TechSkills/TechSkills';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Learn More <b className={s.purple}>About Me</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src={aboutPromoImg} alt="about" />
          </div>
        </div>

        <h2 className={s.skills}>
          My <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />

        <a href='https://github.com/vsnaichuk'>
          <h2 className={s.githubActivity}>
            My <b className={s.purple}>Coding</b> Journey
          </h2>
        
          <GithubActivity />
        </a>
      </div>
    </BaseLayout>
  );
};

export default About;
