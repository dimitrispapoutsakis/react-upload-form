import { TAnimation } from '@typings';
import { motion } from 'framer-motion';

import { blurInAnim, blurInInit, durationDefault } from '@constants/theme';

const BlurInAnimation = ( { children, delay, ...rest }: TAnimation ) => {
  return (
    <motion.div
      initial={ blurInInit }
      animate={ blurInAnim }
      transition={ { duration: durationDefault, ease: 'easeIn', delay: delay } }
      { ...rest }
    >
      { children }
    </motion.div>
  );
}

export default BlurInAnimation;
