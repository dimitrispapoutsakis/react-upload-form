import { useState, useEffect } from "react";
import { useGlobal } from "./GlobalProvider";
import ProgressBar from "./ProgressBar/ProgressBar";

const ProgressContainer = () => {
  const { isUploading, setIsUploading } = useGlobal();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isUploading) {
      // Simulate progress updates during upload
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100; // Cap at 90% until upload completes
          }
          return prev + Math.random() * 15;
        });
      }, 1);

      return () => clearInterval(interval);
    } else {
      // Reset progress when upload is complete
      setIsUploading(false);
      setProgress(0);
    }
  }, [isUploading]);

  return isUploading ?
    (
      <div style={{ width: '100%' }}>
        <ProgressBar progress={progress} />
      </div>
    ) : null;
};

export default ProgressContainer;