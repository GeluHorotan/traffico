import { useState } from 'react';

import { useFaq } from '../context/hooks/useFaq';
import Disclosure from './Disclosure';
import Image from './Image';
import PlusIcon from './PlusIcon';

type isOpen = {
  status: boolean;
  activeId: number;
};

const FaqSection = () => {
  const { faq, loadStatus, loadMore, isLoading } = useFaq();
  const [isOpen, setIsOpen] = useState<isOpen>({ status: false, activeId: -1 });

  const column1Questions = faq?.filter((_, index) => index % 2 === 0);
  const column2Questions = faq?.filter((_, index) => index % 2 === 1);

  const allQuestions =
    faq &&
    faq.map((question, index) => (
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
      // @ts-ignore: Unreachable code error
      id={index + column1Questions?.length}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {question.Message}
    </Disclosure>
  ));

  return (
    <section
      className="flex justify-between  items-center  relative w-full  "
      id="faq"
    >
      <div className="bg-accent_light_2 w-3/4 h-full absolute top-0 right-0 z-10 rounded-tl-[10rem] " />
      <div className="mx-auto w-[80%] z-20 gap-24 flex flex-col ">
        <div className=" flex items-center justify-between">
          <div className=" flex flex-col gap-11 ">
            <h4 className="text-primary">FAQ</h4>
            <h2 className="font-dmSerif max-lg:text-3xl">
              Questions and Answers on Professional Traffic Permits:
            </h2>
          </div>
          <aside className=" w-full  mt-28">
            <Image
              src="/faqDriver.png"
              width="708"
              height="490"
              alt="Faq Driver"
            />
          </aside>
        </div>

        <div className="flex flex-col   items-center justify-center">
          <div className=" grid grid-cols-2 gap-5 max-lg:hidden">
            <div className="flex flex-col gap-3">{column1QuestionsList}</div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">{column2QuestionsList}</div>
              {column1QuestionsList && column2QuestionsList && (
                <button
                  className=" w-full bg-accent_primary bg-opacity-20 rounded-xl drop-shadow-xl px-9 py-7 text-accent_primary flex items-center justify-center mb-28  "
                  onClick={() => loadMore()}
                >
                  <h6 className="font-bold tracking-wider w-full  justify-between">
                    {loadStatus}
                  </h6>

                  <PlusIcon
                    isOpen={loadStatus === 'LOAD MORE' ? false : true}
                  />
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:hidden">
            <div className="flex flex-col gap-3">{allQuestions}</div>
            {allQuestions && (
              <button
                className=" w-full bg-accent_primary bg-opacity-20 rounded-xl drop-shadow-xl px-9 py-7 text-accent_primary flex items-center justify-center mb-28  "
                onClick={() => loadMore()}
              >
                <h6 className="font-bold tracking-wider w-full  justify-between">
                  {loadStatus}
                </h6>

                <PlusIcon isOpen={loadStatus === 'LOAD MORE' ? false : true} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
