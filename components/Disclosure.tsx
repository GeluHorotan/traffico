import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import PlusIcon from './PlusIcon';
import {
  boucingQuestion,
  bouncingAnswer,
  bouncingTransition,
} from './utility/animations';

type Props = {
  children: React.ReactNode;
  title?: string;
  id: number;
  isOpen: {
    status: boolean;
    activeId: number;
  };
  setIsOpen: React.Dispatch<React.SetStateAction<any>>;
};

const Disclosure = ({ children, title, id, isOpen, setIsOpen }: Props) => {
  return (
    <motion.div
      variants={boucingQuestion}
      transition={bouncingTransition}
      initial={'initial'}
      animate={'show'}
      exit={{ y: 100 }}
      className={`w-full bg-disclosure rounded-xl drop-shadow-xl  h-max-content min-h-0`}
      onClick={() => {
        if (isOpen.status && isOpen.activeId === id) {
          setIsOpen({ status: false, activeId: id });
        } else {
          setIsOpen({ status: true, activeId: id });
        }
      }}
    >
      <div className="w-full bg-white px-9 py-4 flex items-center justify-between  rounded-xl drop-shadow-md cursor-pointer h-24 relative z-20 ">
        <h6 className="font-medium ">{title}</h6>
        <PlusIcon
          isOpen={
            isOpen.status && isOpen.activeId === id ? isOpen.status : null
          }
        />
      </div>
      {isOpen.status && isOpen.activeId === id && (
        <AnimatePresence>
          <motion.div
            variants={bouncingAnswer}
            initial={'initial'}
            animate={'show'}
            exit={{ x: 100 }}
            transition={bouncingTransition}
            className="bg-disclosure   px-9 py-6 rounded-b-xl relative  z-10  "
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Disclosure;
