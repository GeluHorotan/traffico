import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  type: 'button' | 'submit' | 'reset';
};

const Button = ({ children, className, type, ...rest }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      type={type}
      className={`${className} w-max items-center justify-center flex uppercase text-secondary bg-accent_primary p-5 rounded-md `}
      {...rest}
    >
      <p className="font-bold tracking-widest ">{children}</p>
    </motion.button>
  );
};

export default Button;
