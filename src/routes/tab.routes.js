import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'react-native-paper';
import Home from '../pages';

const Tab = createMaterialBottomTabNavigator();

const TabRoutes = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      activeColor={colors.primary}
      barStyle={{backgroundColor: colors.backdrop}}>
      <Tab.Screen
        name="technology"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="memory" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="science"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="science" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
