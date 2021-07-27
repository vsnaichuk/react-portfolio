import s from './Burger.module.scss';

const Burger = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.burger}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default Burger;
