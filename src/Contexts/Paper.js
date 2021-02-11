import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PaperContext = ({children}) => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      primary: '#000',
    },
  };
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Icon {...props} size={25} />,
      }}
      theme={MyTheme}>
      {children}
    </PaperProvider>
  );
};

export default PaperContext;
