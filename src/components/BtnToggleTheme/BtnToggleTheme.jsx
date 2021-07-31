import s from './BtnToggleTheme.module.scss';
import Button from '../UIElements/Button/Button';
import { ReactComponent as ToggleLightIcon } from '../../assets/toggle-light.svg';
import { ReactComponent as ToggleDarkIcon } from '../../assets/toggle-dark.svg';
import { useThemeContext } from '../../hooks/themeHook/themeHook';

const BtnToggleTheme = ({ className }) => {
  const { toggle, dark } = useThemeContext();

  return (
    <Button addClass={className} onClick={toggle}>
      {dark && <ToggleLightIcon className={s.toggleTheme} />}
      {!dark && <ToggleDarkIcon className={s.toggleTheme} />}
    </Button>
  );
};

export default BtnToggleTheme;
