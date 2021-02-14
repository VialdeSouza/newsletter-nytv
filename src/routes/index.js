import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import TabRoutes from './tab.routes';
import Reader from '../pages/reader';

const Stack = createStackNavigator();

const Routes = () => {
  const {colors, fonts} = useTheme();

  const optionsStackNavigator = {
    headerStyle: {
      backgroundColor: colors.backdrop,
    },
    headerTitleAlign: 'center',
    headerTintColor: colors.primary,
    headerTitleStyle: fonts.medium,
  };

  const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'technology';
    switch (routeName) {
      case 'technology':
        return 'Tecnologia';
      case 'science':
        return 'Ciência';
      default:
        break;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={optionsStackNavigator}>
        <Stack.Screen
          name="Home"
          component={TabRoutes}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
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
export default Routes;
