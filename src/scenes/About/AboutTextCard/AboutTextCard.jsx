import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hola a todos, soy{' '}
        <span className={s.purple}>Juan Francisco Reales </span>
        de <span className={s.purple}> Mendoza, Argentina.</span>
        <br />
        Full Stack Developer, con experiencia en desarrollo web <br />
        usando React.
        <br />
        <br />
        Terminé el bootcamp de Soy Henry.
        <br />
        <br />
        Aparte de codear, me gustan otras actividades como:
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Jugar fútbol de salón
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Paternar
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Leer
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
