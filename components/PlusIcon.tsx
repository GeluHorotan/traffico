import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { bouncingTransition } from './utility/animations';

type Props = {
  isOpen?: boolean | null;
};
const PlusIcon = ({ isOpen }: Props) => {
  const controls = useAnimationControls();
  useEffect(() => {
    controls.start({
      height: isOpen ? 0 : '1.25rem',
      transition: bouncingTransition,
    });
  }, [controls, isOpen]);

  return (
    <>
      <div className={`w-5 px-2 h-0.5 bg-red-400 relative`}>
        <motion.div
          animate={controls}
          className={`
        w-0.5  
           bg-red-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        ></motion.div>
      </div>
    </>
  );
};

export default PlusIcon;
