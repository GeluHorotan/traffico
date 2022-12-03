import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  type: 'button' | 'submit' | 'reset';
  withBackground?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  className,
  type,
  withBackground,
  ...rest
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      type={type}
      className={`${className} w-max items-center justify-center flex uppercase text-secondary ${
        withBackground ? 'bg-accent_primary' : ''
      }  rounded-md py-5 px-6 `}
      {...rest}
    >
      <p className="font-bold tracking-widest flex gap-6 items-center justify-center ">
        {children}
      </p>
    </motion.button>
  );
};

export default Button;
