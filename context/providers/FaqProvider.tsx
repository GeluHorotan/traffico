import { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type Faq = {
  question: string;
  answer: string;
}[];

type State = {
  faq: string;
  isLoading: boolean;
  fetchFaq: () => Promise<void>;
};

export const FaqContext = createContext<State>({} as State);

export const FaqProvider = ({ children }: Props) => {
  const [faq, setFaq] = useState('test');
  const [isLoading, setIsLoading] = useState(false);

  const fetchFaq = async () => {
    try {
      console.log('test');
    } catch (error) {
      console.log('test2');
    }
  };

  return (
    <FaqContext.Provider
      //   displayName={'Faq'}
      value={{
        faq,
        isLoading,
        fetchFaq,
      }}
    >
      {children}
    </FaqContext.Provider>
  );
};
