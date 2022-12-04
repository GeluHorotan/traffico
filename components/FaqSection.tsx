import Image from './Image';

const FaqSection = () => {
  return (
    <section className="flex justify-between  items-center  ">
      <div className=" flex flex-col gap-11">
        <h4>FAQ</h4>
        <h2>Questions and Answers on Professional Traffic Permits:</h2>
      </div>
      <div className="w-full">
        <Image
          src="/faqdriver.png"
          width="708"
          height="490"
          alt="Faq Driver"
        ></Image>
      </div>
    </section>
  );
};

export default FaqSection;
