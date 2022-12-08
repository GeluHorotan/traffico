import ContactForm from './ContactForm';
import Image from './Image';

const Footer = () => {
  return (
    <section className="mt-[20rem] w-full bg-red-400   pt-28  z-20 ">
      <div className="w-[92%]  relative">
        <div className="bg-accent_blue w-full h-full absolute top-0 left-0 z-10 rounded-tr-full  " />
        <div className="relative z-20 ">
          <Image
            src="/truck.png"
            width="429"
            height="209"
            alt="truck"
            className="-translate-y-3/4"
          />
          <div className="w-full bg-blue-400 h-full">
            <div className="bg-yellow-400 w-1/3 flex items-center justify-center gap-10">
              <div className="bg-accent_primary w-2 h-40 rounded-l-xl" />
              <h5 className="text-white w-full">
                We provide traffic management consultants so you get started
                quickly, contact us for a quote today!
              </h5>
            </div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
