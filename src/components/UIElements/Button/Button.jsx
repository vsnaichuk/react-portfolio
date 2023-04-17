import cx from 'classnames';
import s from './Button.module.scss';

const Button = ({
  type = 'button',
  onClick,
  disabled,
  className,
  children,
  href,
  target,
  style,
  addClass,
  label
}) => {
  if (href) {
    return (
      <a
        style={style}
        className={cx(s.btn, s[className], addClass)}
        href={href}
        target={target}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={style}
      className={cx(s.btn, s[className], addClass)}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default Button;
