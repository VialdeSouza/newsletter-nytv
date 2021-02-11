import React from 'react';
import PaperContext from './src/Contexts/Paper';
import Routes from './src/routes';

const App: () => React$Node = () => {
  return (
    <PaperContext>
      <Routes />
    </PaperContext>
  );
};

export default App;
