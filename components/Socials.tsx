import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

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
        <div key={index} className="bg-primary rounded-full p-2 ">
          {icon.icon}
        </div>
      ))}
    </div>
  );
};

export default Socials;
