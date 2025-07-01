import { TAnimation } from '@typings';
import { delay, motion } from 'framer-motion';

import { durationDefault, fadeInAnim, fadeInInit } from '@constants/theme';

const FadeInAnimation = ( { children, delay, ...rest }: TAnimation ) => (
  <motion.div
    initial={ fadeInInit }
    animate={ fadeInAnim }
    transition={ { duration: durationDefault, ease: 'easeIn', delay: delay } }
    { ...rest }
  >
    { children }
  </motion.div>
);

export default FadeInAnimation;
