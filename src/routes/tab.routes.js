import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'react-native-paper';
import Home from '../pages';

const Tab = createMaterialBottomTabNavigator();

const tabRoutes = [
  {name: 'Tecnologia', icon: 'memory'},
  {name: 'Ciência', icon: 'science'},
];

const TabRoutes = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      activeColor={colors.primary}
      barStyle={{backgroundColor: colors.backdrop}}>
      {tabRoutes.map((config) => (
        <Tab.Screen
          key={config.name}
          name={config.name}
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name={config.icon} color={color} size={26} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabRoutes;
