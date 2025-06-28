import { TAnimation } from '@typings';
import { m } from 'framer-motion';

import { blurInAnim, blurInInit, durationDefault } from '@constants/theme';

const BlurInAnimation = ( { children, ...rest }: TAnimation ) => {
  return (
    <m.div
      initial={ blurInInit }
      animate={ blurInAnim }
      transition={ { duration: durationDefault, ease: 'anticipate' } }
      { ...rest }
    >
      { children }
    </m.div>
  );
}

export default BlurInAnimation;
