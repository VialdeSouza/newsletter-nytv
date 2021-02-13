import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import HomeScreen from '../pages/index';

const Stack = createStackNavigator();

const HomeRoute = ({title}) => {
  const {colors, fonts} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.backdrop,
        },
        headerTitleAlign: 'center',
        headerTintColor: colors.primary,
        headerTitleStyle: {
          fontFamily: fonts.medium,
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{title}} />
    </Stack.Navigator>
  );
};
export default HomeRoute;
