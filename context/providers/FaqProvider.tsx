import React, { createContext, useEffect, useState } from 'react';
import { fetchFaq } from '../../pages/api/faq';

type Props = {
  children: React.ReactNode;
};

type Faq = {
  title: string;
  Message: string;
}[];

type State = {
  faq: Faq | undefined;
  load: number;
  isLoading: boolean;

  setFaq: React.Dispatch<React.SetStateAction<Error | undefined>>;
  // setError: React.Dispatch<React.SetStateAction<Error | undefined>>;
  setLoad: React.Dispatch<React.SetStateAction<number | undefined>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getFaq: () => Promise<Error | undefined>;
  loadMore: () => number;
};

export const FaqContext = createContext<State>({} as State);

export const FaqProvider = ({ children }: Props) => {
  const [originalFaq, setOriginalFaq] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState();
  const [load, setLoad] = useState(10);
  const [faq, setFaq] = useState();

  const getFaq = async () => {
    try {
      const res = await fetchFaq();
      localStorage.setItem('faq', JSON.stringify(res));
      setIsLoading(false);
      setOriginalFaq(res);
      return res;
    } catch (error) {
      setIsLoading(false);
      // setError(error);
      return error;
    }
  };

  useEffect(() => {
    const faq = JSON.parse(localStorage.getItem('faq'));
    if (faq) {
      setOriginalFaq(faq);
    } else {
      // getFaq();
    }
  }, []);

  useEffect(() => {
    const faq = JSON.parse(localStorage.getItem('faq'));
    setFaq(faq.slice(0, load));
  }, [load]);

  const loadMore = () => {
    setLoad((prevState) => prevState + 2);

    return load;
  };

  return (
    <FaqContext.Provider
      displayName={'Faq'}
      // @ts-ignore: Unreachable code error
      value={{
        originalFaq,
        faq,
        load,
        // error,

        loadMore,
        isLoading,
        getFaq,
      }}
    >
      {children}
    </FaqContext.Provider>
  );
};
