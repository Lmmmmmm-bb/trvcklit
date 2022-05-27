import { MotionProps } from 'framer-motion';

export const motionProps: MotionProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
  variants: {
    hidden: { opacity: 0, rotate: -100, transformOrigin: '16px 32px' },
    visible: {
      opacity: 1,
      rotate: 0,
      transformOrigin: '16px 32px',
      transitionDuration: '0.2s'
    },
    exit: { opacity: 0, rotate: 100, transformOrigin: '16px 32px' }
  }
};
