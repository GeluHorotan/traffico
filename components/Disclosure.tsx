import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Disclosure = ({ children, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full bg-disclosure rounded-xl drop-shadow-xl  "
      onClick={(e) => {
        setIsOpen((prevState) => !prevState);
      }}
    >
      <div className="w-full bg-white p-6 flex items-center justify-between  rounded-xl drop-shadow-md cursor-pointer h-24 ">
        <h6 className="font-medium">{title}</h6>
        <p>+</p>
      </div>
      {isOpen && (
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
