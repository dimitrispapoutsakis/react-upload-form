/* NOTE: Naming -> https://chir.ag/projects/name-that-color/#6199ED */
/* Colors... */
/* Darks... */
export const darkBunker = '#151c23';
export const darkMirage = '#1C252E';
export const darkEbonyClay = '#212B36';
export const darkPickledBluewood = '#273849';
export const darkBismark = '#476685';

/* Lights... */
export const whiteAlto = '#D4D4D4';

/* Grays... */
export const silver = '#C9C9C9';
export const silver2 = '#b9b9b9';
export const mercury = '#e2e2e2';
export const silverChalice = '#a7a7a7';
export const grayMineShaft = '#333';

/* Reds... */
export const redBright = '#4f0000';
export const redMonaLisa = '#FF9292';

export const linearGradientDark = `linear-gradient(to left, ${darkEbonyClay}, ${darkBunker})`;
export const linearGradientDarkSecondary = `linear-gradient(to left, ${darkEbonyClay}, ${darkPickledBluewood})`;
export const linearGradientLight = `linear-gradient(to left, #fff, ${silver})`;
export const linearGradientLightSecondary = `linear-gradient(to left, #fff, ${silver2})`;

/* General Appearance... */
export const borderRadius = '15px';
export const borderRadiusSecondary= '5px';

/* Animations... */
export const bezierOne = 'cubic-bezier(0.01, 0.28, 0.76, 1.12)';
export const bezierTwo = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const bezierButter = 'cubic-bezier(0.02, 0.38, 0.15, 0.98)'
export const bezierButterAlt = 'cubic-bezier(0.09, 0.37, 0.46, 0.98)'
export const bezierButterFramerM = [ 0.4, 0, 0.2, 1 ];
export const blurInInit = { opacity: 0, filter: 'blur(15px)', transform: 'scale3d(.98, .98, .98)' };
export const blurInAnim = { opacity: 1, filter: 'blur(0px)', transform: 'scale3d(1, 1, 1)' }; 
export const fadeInInit = { opacity: 0 }; 
export const fadeInAnim = { opacity: 1 }; 
/* Sides ( Up ).... */
export const slideInUpInit = { opacity: 0, transform: 'translate3d(0, 30px, 0)' };
export const slideInUpAnim = { opacity: 1, transform: 'translate3d(0, 0, 0)' };

// Shared...
export const durationDefault = 0.25;

// Framer Motion...
export const transitionDefault = { duration: 0.5, ease: 'easeInOut' }