import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Reader from '../pages/reader';
import TabRoutes from './tab.routes';

const Stack = createStackNavigator();

const HomeRoute = () => {
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
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Home" component={TabRoutes} />
        <Stack.Screen
          name="Reader"
          component={Reader}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default HomeRoute;
