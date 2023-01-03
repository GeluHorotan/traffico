import ContactForm from './ContactForm';
import FooterNav from './FooterNav';
import Image from './Image';
import Socials from './Socials';

// Animation
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { bouncingTransition, slidingLeft } from './utility/animations';

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const truckControls = useAnimation();

  useEffect(() => {
    if (inView) {
      truckControls.start('animate');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <section
      className="mt-[20rem]  w-full    pt-28  z-40  relative "
      id="footer"
    >
      <motion.div
        variants={slidingLeft}
        initial="initial"
        animate={truckControls}
        transition={bouncingTransition}
        ref={ref}
      >
        <Image
          src="/trekmobil.png"
          width="429"
          height="209"
          alt="truck"
          className="-translate-y-[68%] -translate-x-[20%] absolute left-0 z-60 max-lg:w-1/3"
        />
      </motion.div>
      <Image
        src="/smallCircle.png"
        width="186"
        height="93"
        alt="small circle"
        className=" absolute -left-24 z-20 max-lg:w-[20%] max-lg:-left-12"
      />
      <Image
        src="/line.png"
        width="1033"
        height="466"
        alt="line"
        className=" absolute -left-24 top-4 max-lg:-left-12 max-lg:top-96 "
      />
      <div className="w-[92%] bg-accent_blue rounded-tr-[7rem]  pb-36 max-lg:w-full  ">
        <div className="flex flex-col items-center justify-between px-20 relative">
          <div className="flex items-center  justify-center gap-24 max-lg:flex-col-reverse  max-lg:gap-0 max-lg:mt-60">
            <div className=" w-5/12  flex items-center justify-center gap-10 max-lg:w-full  ">
              <div className="bg-accent_primary w-2 h-40  rounded-l-xl" />
              <h5 className="text-white w-10/12 font-normal ">
                We provide traffic management consultants so you get started
                quickly, contact us for a quote today!
              </h5>
            </div>
            <ContactForm></ContactForm>
          </div>

          <FooterNav />
        </div>
      </div>
      <div className=" py-9 w-[70%] mx-auto flex items-center justify-between max-lg:flex-col gap-4  ">
        <p>Copyright {new Date().getFullYear()}</p>
        <Socials size={32} color="white" />
      </div>
    </section>
  );
};

export default Footer;
