import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiSass,
  DiSwift,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiKotlin,
  SiMobx,
  SiFirebase,
  SiJest,
  SiExpo
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiSwift />
      </li>
      <li className={s.techIcon}>
        <SiKotlin />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiMobx />
      </li>
       <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiFirebase />
      </li>
      <li className={s.techIcon}>
        <SiSocketdotio />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <SiExpo />
      </li>
      <li className={s.techIcon}>
        <SiJest />
      </li>
    </ul>
  );
};

export default TechSkills;
