import React from 'react';

import {ScreensName} from '@/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AccountStackNavigator,
  HomeStackNavigator,
  ProductsStackNavigator,
} from '@/routes/stackNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import tailwind from 'twrnc';

const Tab = createBottomTabNavigator();

export const TabRoutes: React.FC = () => {
  return (
    <SafeAreaView style={tailwind`w-full h-full`}>
      <Tab.Navigator
        initialRouteName={ScreensName.home.defaultScreenName}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name={ScreensName.home.defaultScreenName}
          component={HomeStackNavigator}
        />
        <Tab.Screen
          name={ScreensName.account.defaultScreenName}
          component={AccountStackNavigator}
        />
        <Tab.Screen
          name={ScreensName.products.defaultScreenName}
          component={ProductsStackNavigator}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
