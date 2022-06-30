import React from 'react';

import {Home, ScreensName} from '../../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Category} from '../../../screens/Category';
import {Text, TouchableOpacity, View} from 'react-native';

const Stack = createNativeStackNavigator();

export const HomeStackNavigator: React.FC = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={ScreensName.home.initial}
      screenOptions={{
        headerShown: true,
        headerLeft: ({canGoBack}) =>
          canGoBack ? (
            <TouchableOpacity onPress={navigation.goBack}>
              <Text>Voltar</Text>
            </TouchableOpacity>
          ) : undefined,
      }}>
      <Stack.Screen name={ScreensName.home.initial} component={Home} />
      <Stack.Screen name={ScreensName.home.category} component={Category} />
    </Stack.Navigator>
  );
};
