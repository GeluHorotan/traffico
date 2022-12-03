import Image from './Image';

const AboutSection = () => {
  return (
    <section className="flex justify-between ">
      <div className="flex flex-col  w-1/2 gap-16 justify-end  ">
        <div className="flex flex-col gap-10">
          <h4 className="text-primary">ABOUT US</h4>
          <h6>
            The occupational traffic permit is one of the most important things
            in the company when carrying out freight transport. In fact, it is a
            prerequisite for doing business traffic at all.{' '}
          </h6>
        </div>
        <div className="bg-accent_light py-8 px-14 border-l-8 border-l-accent_primary rounded-l-md bg-opacity-40 ">
          <h4>
            How do you do when you need to obtain a commercial traffic permit
            for freight transport to your business?
          </h4>
        </div>
      </div>
      <div className="w-1/2  flex justify-end pb-24">
        <Image
          src="/driver.png"
          width="576"
          height="480"
          alt="Truck driver"
          className="pointer-events-none"
        />
      </div>
    </section>
  );
};

export default AboutSection;
