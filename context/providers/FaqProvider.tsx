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
  setLoad: React.Dispatch<React.SetStateAction<number | undefined>>;
  setIsLoading: React.Dispatch<React.SetStateAction<Error | undefined>>;
  getFaq: () => Promise<void>;
  loadMore: () => Promise<void>;
};

export const FaqContext = createContext<State>({} as State);

export const FaqProvider = ({ children }: Props) => {
  const [faq, setFaq] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(10);

  const getFaq = async () => {
    try {
      const res = await fetchFaq();
      setIsLoading(false);
      setFaq(res);
    } catch (error) {}
  };

  useEffect(() => {
    getFaq();
  }, []);

  const loadMore = () => {
    setLoad((prevState) => prevState + 2);
  };

  return (
    <FaqContext.Provider
      displayName={'Faq'}
      value={{
        faq,
        load,
        loadMore,
        isLoading,
        getFaq,
      }}
    >
      {children}
    </FaqContext.Provider>
  );
};
