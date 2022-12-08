import Image from './Image';

const HowToSection = () => {
  // const ref2 = React.forwardRef((props, ref) => {
  //   return ref;
  // });

  return (
    <section className="flex justify-between   items-center   " id="howTo">
      <div className="flex max-lg:flex-col py-20 max-lg:py-0 w-full  justify-center    items-center">
        <aside className="w-1/2 max-lg:w-full">
          <Image
            src="/youngLady.png"
            width="720"
            height="679"
            alt="Young lady"
            className="pointer-events-none    lg:-translate-x-36    "
          />
        </aside>
        <div className="flex w-2/5 flex-col gap-10 max-lg:w-full   ">
          <h4 className="text-primary">HOW TO APPLY</h4>
          <h6 className=" w-full">
            When applying for a traffic permit, there are certain requirements
            that you must meet that are included in the examination:
            requirements for professional knowledge, solid establishment, good
            reputation and financial resources. Important to remember is to
            confirm your application for a traffic permit by the company&apos;s
            company signer or CEO.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
