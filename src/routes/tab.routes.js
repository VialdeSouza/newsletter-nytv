import * as React from 'react';
import {Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../pages/index';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      activeColor="#E50091"
      barStyle={{backgroundColor: '#FFFFFF'}}>
      <Tab.Screen
        name="Tecnologia"
        component={HomeScreen}
        options={{
          title: 'Tecnologia',
          tabBarLabel: 'Tecnologia',
          tabBarIcon: ({color}) => (
            <Icon name="memory" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ciência"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Ciência',
          tabBarIcon: ({color}) => (
            <Icon name="science" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
