import { TAnimation } from '@typings';
import { motion } from 'framer-motion';

import { durationDefault, fadeInAnim, fadeInInit } from '@constants/theme';

const FadeInAnimation = ( { children, ...rest }: TAnimation ) => (
  <motion.div
    initial={ fadeInInit }
    animate={ fadeInAnim }
    transition={ { duration: durationDefault, ease: 'easeIn' } }
    { ...rest }
  >
    { children }
  </motion.div>
);

export default FadeInAnimation;
