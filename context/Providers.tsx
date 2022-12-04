import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FaqProvider } from './providers/FaqProvider';

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <FaqProvider>{children}</FaqProvider>
    </QueryClientProvider>
  );
};

export default Providers;
