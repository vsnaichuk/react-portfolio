import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Snaichuk Volodumur </span>
        from <span className={s.purple}> Ternopil, Ukraine.</span>
        <br />I am a junior pursuing IMSC in Maths and Computing in
        BIT Mesra.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Writting Tech Blogs
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
      <footer className={s.footer}>SV</footer>
    </div>
  );
};

export default AboutTextCard;
