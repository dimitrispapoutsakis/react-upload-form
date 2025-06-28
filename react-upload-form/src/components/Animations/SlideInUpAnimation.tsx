import { TAnimation } from '@typings';
import { motion } from 'framer-motion';

import { bezierButterFramerM, durationDefault, slideInUpAnim, slideInUpInit } from '@constants/theme';

const SlideInUpAnimation = ( { children, delay, ...rest }: TAnimation ) => (
  <motion.div
    initial={ slideInUpInit }
    animate={ slideInUpAnim }
    transition={ { ease: 'easeIn', duration: durationDefault, delay: delay, ...rest.transition } }
    { ...rest }
  >
    { children }
  </motion.div>
);

export default SlideInUpAnimation;
