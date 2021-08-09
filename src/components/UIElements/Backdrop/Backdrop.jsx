import s from './Backdrop.module.scss';

const Backdrop = ({ onClick }) => {
  return <div className={s.backdrop} onClick={onClick} />;
};

export default Backdrop;
