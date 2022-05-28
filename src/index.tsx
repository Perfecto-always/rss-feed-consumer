import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Styles from './styles/global.styles';

import HomeScreen from './screen/Home';
import SettingsScreen from './screen/Settings';
import CreateScreen from './screen/News';

/** Bottom Tab bar Icons */
import Home from './assets/icons/home.svg';
import News from './assets/icons/news.svg';
import Settings from './assets/icons/settings.svg';

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <>
      <Tab.Navigator
        sceneContainerStyle={Styles.container}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{
            tabBarIcon: ({color}) => <News color={color} />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => <Home color={color} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color}) => <Settings color={color} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Index;
