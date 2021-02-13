import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'react-native-paper';
import HomeRoute from './home.routes';

const Tab = createMaterialBottomTabNavigator();

const tabRoutes = [
  {name: 'Tecnologia', icon: 'memory'},
  {name: 'Ciência', icon: 'science'},
];

const Routes = () => {
  const {colors} = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor={colors.primary}
        barStyle={{backgroundColor: colors.backdrop}}>
        {tabRoutes.map((config) => (
          <Tab.Screen
            key={config.name}
            name={config.name}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name={config.icon} color={color} size={26} />
              ),
            }}>
            {(props) => <HomeRoute {...props} title={config.name} />}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
