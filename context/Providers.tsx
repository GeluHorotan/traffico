import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AlertProvider } from './providers/AlertProvider';
import { FaqProvider } from './providers/FaqProvider';

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AlertProvider>
        <FaqProvider>{children}</FaqProvider>
      </AlertProvider>
    </QueryClientProvider>
  );
};

export default Providers;
