// src/hooks/useNavAnimation.js

import { useSpring } from 'react-spring';

export default function useNavAnimation() {
  const [navStyle, setNavStyle] = useSpring(() => ({
    clipPath: 'circle(0px at 84.75% 6.5%)'
  }));

  const toggleMenu = () => {
    setNavStyle({
      clipPath: navStyle.clipPath.getValue() === 'circle(0px at 84.75% 6.5%)' ?
        'circle(150% at 84.75% 6.5%)' :
        'circle(0px at 84.75% 6.5%)',
      config: {
        tension: 400,
        friction: 20
      }
    });
  };

  return [navStyle, toggleMenu];
}