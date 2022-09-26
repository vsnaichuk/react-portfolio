import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import ReactParticles from 'react-tsparticles';
import {
  DARK_THEME_PARTICLES,
  LIGHT_THEME_PARTICLES,
} from './particleType';
import { useThemeContext } from '../../../hooks/themeHook/themeHook';

const Particles = () => {
  const { dark } = useThemeContext();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particles = dark
    ? DARK_THEME_PARTICLES
    : LIGHT_THEME_PARTICLES;

  return (
    <ReactParticles
      init={particlesInit}
      params={{
        particles: particles,
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particles;
