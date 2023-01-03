import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {RecoilRoot} from 'recoil';
import Navigation from './Navigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Navigation />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
