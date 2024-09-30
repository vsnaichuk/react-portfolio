import s from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <div className={s.innerPreloader}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
