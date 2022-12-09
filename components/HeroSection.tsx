import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';
import Button from '../components/Button';

import Image from './Image';
import { bouncingTransition, slidingLeft } from './utility/animations';

const HeroSection: React.FC = () => {
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
    <header>
      <div className="bg-gradient-to-l from-transparent via-transparent to-[#EE4D47] relative       ">
        <div className="absolute top-48 left-40 flex flex-col gap-16 max-md:top-6 max-md:left-20    max-lg:w-max max-lg:gap-2 max-sm:left-12 ">
          <h1 className="text-white max-2xl:text-4xl max-sm:text-xl ">
            Your awesome <br /> traffic permit <br /> consultant.
          </h1>
          <Button type={'button'} withBackground>
            <Link href="/under-development" className="flex items-center gap-4">
              get started
              <HiArrowNarrowRight
                size={24}
                className="font-black "
                fontStyle={'font-black'}
              />
            </Link>
          </Button>
        </div>

        <Image
          src="/smallCircle.png"
          alt="smallCircle"
          width={'154'}
          height={'77'}
          className="absolute -bottom-10 right-[60%] max-md:-bottom-5 max-md:w-[20%]   "
        />
        <Image
          src="/circle.png"
          alt="circle"
          width={'240'}
          height={'120'}
          className="absolute -bottom-20 right-[45%] max-md:-bottom-5  max-md:w-[20%] "
        />

        <Image
          src="/heroBackground.png"
          alt="heroBackground"
          width={'1285'}
          height={'802'}
          className="max-lg:w-[88%]"
        />
        <Image
          src="/people.png"
          width={'365'}
          height={'502'}
          alt="people"
          className="z-10 absolute top-1/2 left-1/2  w-[25%] max-2xl:left-[65%]  "
        />
      </div>
      <motion.div
        variants={slidingLeft}
        initial="initial"
        animate={truckControls}
        transition={bouncingTransition}
        ref={ref}
      >
        <Image
          src={'/truck.png'}
          width={'532'}
          height={'352'}
          alt="Truck"
          className="z-10 relative -mt-2  pointer-events-none max-lg:w-[40%] "
        />
      </motion.div>
    </header>
  );
};

export default HeroSection;
