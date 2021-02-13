import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PaperContext = ({children}) => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      primary: '#E50091',
      accent: '#F4C118',
      background: '#F8F9FA',
      backdrop: '#FFFFFF',
    },
    fonts: {
      medium: 'Slabo13px-Regular',
      redular: 'Roboto-Regular',
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
