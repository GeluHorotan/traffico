import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

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
    <div
      className="w-full bg-disclosure rounded-xl drop-shadow-xl  "
      onClick={() => {
        if (isOpen.status && isOpen.activeId === id) {
          setIsOpen({ status: false, activeId: id });
        } else {
          setIsOpen({ status: true, activeId: id });
        }
      }}
    >
      <div className="w-full bg-white p-6 flex items-center justify-between  rounded-xl drop-shadow-md cursor-pointer h-24 ">
        <h6 className="font-medium">{title}</h6>
        <p>+</p>
      </div>
      {isOpen.status && isOpen.activeId === id && (
        <AnimatePresence>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1 }}
            transition={{ duration: 0.1 }}
            className="bg-disclosure   px-9 py-16 rounded-b-xl   "
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Disclosure;
