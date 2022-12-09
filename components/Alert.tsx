import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import { MdClose, MdErrorOutline, MdTaskAlt } from 'react-icons/md';
import { useAlert } from '../context/hooks/useAlert';

type Props = {
  id: string;
  message: string;
  isSuccess: boolean;
};

const Alert = ({ id, message, isSuccess }: Props) => {
  const { deleteAlert } = useAlert();

  const [constrained] = useState<boolean>(true);
  const [direction, setDirection] = useState<string>('');

  const alertElem = useRef(null);
  const x = useMotionValue(0);

  const getDirection = () => {
    return x.getVelocity() >= 1
      ? 'right'
      : x.getVelocity() <= -1
      ? 'left'
      : undefined;
  };

  const getTrajectory = () => {
    // @ts-ignore: Unreachable code error
    setDirection(getDirection());
  };

  const flyAway = (min: number, id: string) => {
    if (direction && Math.abs(x.getVelocity()) > min) {
      deleteAlert(id);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        key={id}
        transition={spring}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 5000, opacity: 0 }}
        dragConstraints={
          constrained && { left: 0, right: 0, top: 0, bottom: 0 }
        }
        dragElastic={1}
        drag="x"
        ref={alertElem}
        style={{ x }}
        onDrag={getTrajectory}
        onDragEnd={() => flyAway(500, id)}
        className=" bg-secondary text-primary w-max  p-4 shadow-2xl relative rounded-xl   cursor-pointer "
      >
        <div className="flex items-center justify-center    h-full ">
          <div className="flex  items-center  gap-4   ">
            {isSuccess ? (
              <MdTaskAlt size={32} className={'text-success'} />
            ) : (
              <MdErrorOutline size={40} className={'text-error'} />
            )}

            <p className="text-base text-primary w-full ">{message}</p>
          </div>
          <div className="h-full  flex items-start ">
            <MdClose size={16} className=" text-primary" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 15,
};

export default Alert;
