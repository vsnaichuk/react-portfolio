import s from './SectionBG.module.scss';

const SectionBG = ({ children }) => {
  return <div className={s.sectionBG}>{children}</div>;
};

export default SectionBG;
