import React from 'react';

import {Account, ScreensName} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile} from '@/screens/Profile';
import {Text, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

export const AccountStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreensName.account.initial}
      screenOptions={{
        headerShown: true,
        headerLeft: ({canGoBack}) =>
          canGoBack ? (
            <TouchableOpacity onPress={() => null}>
              <Text>Voltar</Text>
            </TouchableOpacity>
          ) : undefined,
      }}>
      <Stack.Screen name={ScreensName.account.initial} component={Account} />
      <Stack.Screen name={ScreensName.account.profile} component={Profile} />
    </Stack.Navigator>
  );
};
