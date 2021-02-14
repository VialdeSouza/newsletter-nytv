import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import HomeScreen from '../pages/index';
import Reader from '../pages/reader';

const Stack = createStackNavigator();

const HomeRoute = ({title}) => {
  const {colors, fonts} = useTheme();
  const options = {
    headerStyle: {
      backgroundColor: colors.backdrop,
    },
    headerTitleAlign: 'center',
    headerTintColor: colors.primary,
    headerTitleStyle: fonts.medium,
  };

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Home" component={HomeScreen} options={{title}} />
      <Stack.Screen name="Reader" component={Reader} options={{title}} />
    </Stack.Navigator>
  );
};
export default HomeRoute;
