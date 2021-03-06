import React from 'react';
import PaperProvider from './src/Contexts/Paper';
import Routes from './src/routes';

const App = () => {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
};

export default App;
