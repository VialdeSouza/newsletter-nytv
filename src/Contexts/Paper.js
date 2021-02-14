import React from 'react';
import {DefaultTheme, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PaperProvider = ({children}) => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      primary: '#E50091',
      accent: '#F4C118',
      background: '#F8F9FA',
      backdrop: '#FFFFFF',
    },
    fonts: {
      medium: {fontFamily: 'Slabo13px-Regular'},
      regular: {fontFamily: 'Roboto-Regular'},
    },
  };
  return (
    <Provider
      settings={{
        icon: (props) => <Icon {...props} size={25} />,
      }}
      theme={MyTheme}>
      {children}
    </Provider>
  );
};

export default PaperProvider;
