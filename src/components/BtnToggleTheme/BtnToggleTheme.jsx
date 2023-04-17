import { useMemo } from 'react';
import s from './BtnToggleTheme.module.scss';
import Button from '../UIElements/Button/Button';
import { ReactComponent as ToggleLightIcon } from '../../assets/toggle-light.svg';
import { ReactComponent as ToggleDarkIcon } from '../../assets/toggle-dark.svg';
import { useThemeContext } from '../../hooks/themeHook/themeHook';

const BtnToggleTheme = ({ className }) => {
  const { dark, toggleTheme } = useThemeContext();

  const ToggleThemeIcon = useMemo(
    () => (dark ? ToggleDarkIcon : ToggleLightIcon),
    [dark],
  );

  return (
    <Button
      addClass={className}
      onClick={toggleTheme}
      label="theme toggle"
    >
      <ToggleThemeIcon className={s.toggleTheme} />
    </Button>
  );
};

export default BtnToggleTheme;
