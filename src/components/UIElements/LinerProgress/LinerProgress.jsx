import cx from 'classnames';
import s from './LinerProgress.module.scss';

const LinerProgress = () => {
  return (
    <div className={s.linearProgress}>
      <div className={cx(s.bar, s.bar1)} />
      <div className={cx(s.bar, s.bar2)} />
    </div>
  );
};

export default LinerProgress;
