import cx from 'classnames';
import React from 'react';
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
}) => {
  if (href) {
    return (
      <a
        style={style}
        className={cx(s.btn, s[className])}
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
      className={cx(s.btn, s[className])}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
