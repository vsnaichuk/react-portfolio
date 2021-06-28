// import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';

const About = () => {
  return (
    <BaseLayout>
      <div fluid className="about-section">
        <div className={s.aboutWrapper}>
          <div>
            <h1 style={s.title}>
              Know Who <b className={s.purple}>I'M</b>
            </h1>
            <p>Text</p>
          </div>

          <div className={s.aboutImg}>
            <img src={laptopImg} alt="about" />
          </div>
        </div>

        <h2 className={s.skills}>
          Professional <b className={s.purple}>Skills </b>
        </h2>

        <Techstack />

        <h2 className={s.githubActivity}>
          Professional <b className={s.purple}>Skills </b>
        </h2>

        <GithubActivity />
      </div>
    </BaseLayout>
  );
};

export default About;
