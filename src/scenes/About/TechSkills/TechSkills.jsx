import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from 'react-icons/di';
import { SiRedux } from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiPostgresql />
      </li>
      <li className={s.techIcon}>
        <DiJava />
      </li>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
