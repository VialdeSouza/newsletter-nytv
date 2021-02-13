import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'react-native-paper';
import HomeScreen from '../pages/index';

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

function Home({title}) {
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
}

const Routes = () => {
  const {colors} = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor={colors.primary}
        barStyle={{backgroundColor: colors.backdrop}}>
        <Tab.Screen
          name="Tecnologia"
          options={{
            tabBarLabel: 'Tecnologia',
            tabBarIcon: ({color}) => (
              <Icon name="memory" color={color} size={26} />
            ),
          }}>
          {(props) => <Home {...props} title="Tecnologia" />}
        </Tab.Screen>
        <Tab.Screen
          name="Ciência"
          options={{
            tabBarLabel: 'Ciência',
            tabBarIcon: ({color}) => (
              <Icon name="science" color={color} size={26} />
            ),
          }}>
          {(props) => <Home {...props} title="Ciência" />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
