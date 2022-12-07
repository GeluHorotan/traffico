import { useState } from 'react';
import { useFaq } from '../context/hooks/useFaq';
import Disclosure from './Disclosure';
import Image from './Image';

type isOpen = {
  status: boolean;
  activeId: number;
};

const FaqSection = () => {
  const { faq, loadMore } = useFaq();
  const [isOpen, setIsOpen] = useState<isOpen>({ status: false, activeId: -1 });

  const column1Questions = faq?.filter((_, index) => index % 2 === 0);
  const column2Questions = faq?.filter((_, index) => index % 2 === 1);

  const column1QuestionsList = column1Questions?.map((question, index) => (
    <Disclosure
      title={question.title}
      key={index}
      id={index}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {question.Message}
    </Disclosure>
  ));
  const column2QuestionsList = column2Questions?.map((question, index) => (
    <Disclosure
      title={question.title}
      key={index + 30}
      id={index + 30}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {question.Message}
    </Disclosure>
  ));
  console.log(isOpen);

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
        <div className="flex flex-col bg-red-400 p-8 items-center justify-center">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
          >
            <div className="flex flex-col">{column1QuestionsList}</div>
            <div className="flex flex-col"> {column2QuestionsList}</div>
          </div>
          <button className="bg-yellow-400" onClick={() => loadMore()}>
            LOAD MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
