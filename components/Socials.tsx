import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import Button from './Button';

type Props = {
  size?: number;
  className?: string;
  color?: string;
};

const Socials = ({ size, color }: Props) => {
  const icons = [
    {
      icon: <FaFacebookF size={size} color={color} />,
    },
    {
      icon: <AiOutlineTwitter size={size} color={color} />,
    },
    { icon: <AiFillInstagram size={size} color={color} /> },
  ];
  return (
    <div className="flex gap-10">
      {icons?.map((icon, index) => (
        <Button
          type="button"
          key={index}
          className="bg-primary rounded-full py-2 px-2 "
        >
          {icon.icon}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
