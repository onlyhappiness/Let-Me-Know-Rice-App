import React from 'react';
import {RecoilRoot} from 'recoil';
import Navigation from './Navigation';

const App = () => {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
};

export default App;
