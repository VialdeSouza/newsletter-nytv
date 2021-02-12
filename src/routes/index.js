import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../pages/index';

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

function Home({title}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#E50091',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{title}} />
    </Stack.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#E50091"
        barStyle={{backgroundColor: '#FFFFFF'}}>
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
