import { useFaq } from '../context/hooks/useFaq';
import Image from './Image';

const FaqSection = () => {
  const { faq, load, loadMore } = useFaq();
  return (
    <section className="flex justify-between  items-center  relative w-full">
      <div className="bg-accent_light_2 w-[65rem] h-[93rem] absolute top-0 right-0 z-10 rounded-tl-[10rem]" />
      <div className="mx-auto w-[80%] z-20 ">
        <div className=" flex items-center justify-center">
          <div className=" flex flex-col gap-11">
            <h4 className="text-primary">FAQ</h4>
            <h2 className="font-dmSerif">
              Questions and Answers on Professional Traffic Permits:
            </h2>
          </div>
          <aside className="w-full -translate-x-14">
            <Image
              src="/faqdriver.png"
              width="708"
              height="490"
              alt="Faq Driver"
            />
          </aside>
        </div>
        {faq?.slice(0, load).map((faq, index) => {
          return <div key={index}>{faq.title}</div>;
        })}
        <button onClick={(e) => loadMore()}>LOAD MORE</button>
      </div>
    </section>
  );
};

export default FaqSection;
