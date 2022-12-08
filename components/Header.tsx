import Logo from './svgs/Logo';

type Props = {
  children: React.ReactNode;
  isFooter?: boolean;
};

const Header: React.FC<Props> = ({ children, isFooter }) => {
  return (
    <nav
      className={`flex items-center justify-between    ${
        isFooter ? '' : 'absolute px-44 '
      }  w-full gap-56   `}
    >
      <div className="flex w-full items-center justify-center pt-16 gap-4 ">
        <Logo />
        <h3 className="text-white">TRAFICO.</h3>
      </div>
      <div className="flex items-center  w-full justify-center pt-10 gap-x-24  ">
        {children}
      </div>
    </nav>
  );
};

export default Header;
