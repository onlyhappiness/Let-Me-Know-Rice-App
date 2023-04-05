import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Navigation from './Navigation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 1500,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
