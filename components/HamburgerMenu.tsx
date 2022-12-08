import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AiOutlineAlignLeft, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import Button from './Button';
import Logo from './svgs/Logo';

type HamburgerMenuProps = {
  iconSize?: number;

  navItems: {
    name: string;
    id: number;
    ref: string;
  }[];
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  iconSize,

  navItems,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (menuOpen) {
      // @ts-ignore: Unreachable code error
      body.style.overflow = 'hidden';
    } else {
      // @ts-ignore: Unreachable code error
      body.style.overflow = 'initial';
    }
  }, [menuOpen]);

  return (
    <div>
      <motion.div className="fixed top-4 left-4 z-50" onClick={toggleMenu}>
        {!menuOpen ? (
          <AiOutlineAlignLeft size={iconSize} />
        ) : (
          <AiOutlineClose size={iconSize} />
        )}
      </motion.div>

      {menuOpen && (
        <>
          <nav className="navbar fixed  z-40 h-screen flex flex-col items-center justify-center px-4 py-6  space-y-1 sm:space-y-2 sm:px-6 sm:py-8 sm:flex-row bg-red-400 w-1/2">
            <div className="flex flex-col gap-20">
              <div className="flex gap-4 items-center justify-center">
                <Logo />
                <h4 className="text-white">TRAFFICO.</h4>
              </div>
              <div className="flex flex-col gap-4 items-center">
                {navItems.map((item) => (
                  <Button
                    type="button"
                    key={item.id}
                    className="cursor-pointer "
                  >
                    <Link
                      smooth
                      to={item.ref}
                      onClick={toggleMenu}
                      className="text-2xl text-white"
                    >
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </nav>
          <div
            className=" bg-blend-multiply bg-black opacity-70 fixed top-0 left-0 z-30 w-full h-screen"
            onClick={toggleMenu}
          ></div>
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;
