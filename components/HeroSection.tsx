import { HiArrowNarrowRight } from 'react-icons/hi';
import Button from '../components/Button';
import Image from './Image';

const HeroSection: React.FC = () => {
  return (
    <header>
      <div
        className="bg-gradient-to-l from-[transparent] to-[#EE4D47]  w-max     "
        id="hero"
      >
        <div className="absolute top-48 left-60 flex flex-col gap-16">
          <h1 className="text-white">
            Your awesome <br /> traffic permit <br /> consultant.
          </h1>
          <Button type={'button'} withBackground>
            get started
            <HiArrowNarrowRight
              size={24}
              className="font-black "
              fontStyle={'font-black'}
            />
          </Button>
        </div>
        <Image
          src="/smallCircle.png"
          alt="smallCircle"
          width={'154'}
          height={'77'}
          className="absolute top-[48rem] left-[35%] pointer-events-none "
        />
        <Image
          src="/circle.png"
          alt="circle"
          width={'240'}
          height={'120'}
          className="absolute top-[47rem] left-[38%]  pointer-events-none"
        />

        <Image
          src="/heroBackground.png"
          alt="heroBackground"
          width={'1285'}
          height={'802'}
        />
        <Image
          src="/people.png"
          width={'365'}
          height={'502'}
          alt="people"
          className="z-10 absolute top-[28rem] left-[55%] pointer-events-none "
        />
      </div>

      <Image
        src={'/truck.png'}
        width={'532'}
        height={'352'}
        alt="Truck"
        className="z-10 relative -mt-2  pointer-events-none "
      />
    </header>
  );
};

export default HeroSection;
