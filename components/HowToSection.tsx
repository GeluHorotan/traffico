import Image from './Image';

const HowToSection = () => {
  return (
    <section className="flex justify-between  items-center  ">
      <div className="flex  py-20  px-16 items-center">
        <Image
          src="/youngLady.png"
          width="720"
          height="679"
          alt="Young lady"
          className="pointer-events-none     -translate-x-40 "
        />

        <div className="w-1/2 ">
          <div className="flex flex-col gap-10 ">
            <h4 className="text-primary">HOW TO APPLY</h4>
            <h6>
              When applying for a traffic permit, there are certain requirements
              that you must meet that are included in the examination:
              requirements for professional knowledge, solid establishment, good
              reputation and financial resources. Important to remember is to
              confirm your application for a traffic permit by the
              company&apos;s company signer or CEO.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
