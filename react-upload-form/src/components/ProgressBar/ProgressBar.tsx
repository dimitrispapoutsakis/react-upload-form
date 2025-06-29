import { TTheme } from '@typings';
import { motion } from 'framer-motion';
import { useGlobal } from '@components/GlobalProvider';
import { ProgressBarStyle, StyledProgressBar, StyledProgressIndicator } from './ProgressBar.style';

interface IProgressBar {
  progress: number;
  showProgress?: boolean;
}

const ProgressBar = ({ progress, showProgress = true }: IProgressBar) => {
  const { gradientBg, theme } = useGlobal();
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div css={ProgressBarStyle}>
      <StyledProgressBar theme={theme} gradientBg={gradientBg}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${clampedProgress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <StyledProgressIndicator theme={theme} gradientBg={gradientBg} />
        </motion.div>
      </StyledProgressBar>
      
      {showProgress && (
        <span style={{ 
          fontSize: '12px', 
          marginTop: '8px', 
          color: theme === 'dark' ? '#ffffff' : '#000000',
          opacity: 0.8 
        }}>
          {Math.round(clampedProgress)}%
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
