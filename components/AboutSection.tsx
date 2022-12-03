import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className=" flex">
      <div className="flex flex-col w-1/2">
        <h4>ABOUT US</h4>
        <p>
          The occupational traffic permit is one of the most important things in
          the company when carrying out freight transport. In fact, it is a
          prerequisite for doing business traffic at all.{' '}
        </p>
      </div>
      <div>
        <Image
          src="/driver.png"
          width="576"
          height="480"
          alt="Truck driver"
          objectFit="cover"
        ></Image>
      </div>
    </section>
  );
};

export default AboutSection;
