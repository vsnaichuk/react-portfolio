import { BsTerminalFill } from '@react-icons/all-files/bs/BsTerminalFill';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiSwift } from '@react-icons/all-files/di/DiSwift';
import { SiExpo } from '@react-icons/all-files/si/SiExpo';
import { SiFirebase } from '@react-icons/all-files/si/SiFirebase';
import { SiJest } from '@react-icons/all-files/si/SiJest';
import { SiKotlin } from '@react-icons/all-files/si/SiKotlin';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiSocketDotIo } from '@react-icons/all-files/si/SiSocketDotIo';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import s from './TechSkills.module.scss';

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
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiFirebase />
      </li>
      <li className={s.techIcon}>
        <SiSocketDotIo />
      </li>
      <li className={s.techIcon}>
        <SiExpo />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <SiJest />
      </li>
      <li className={s.techIcon}>
        <BsTerminalFill />
      </li>
    </ul>
  );
};

export default TechSkills;
