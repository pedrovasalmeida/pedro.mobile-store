import React from 'react';

import {ScreensName} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, TouchableOpacity} from 'react-native';
import {ProductDetails} from '@/screens/Product/Details';

const Stack = createNativeStackNavigator();

export const ProductsStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreensName.home.initial}
      screenOptions={{
        headerShown: true,
        headerLeft: ({canGoBack}) =>
          canGoBack ? (
            <TouchableOpacity onPress={() => null}>
              <Text>Voltar</Text>
            </TouchableOpacity>
          ) : undefined,
      }}>
      <Stack.Screen
        name={ScreensName.products.details}
        component={ProductDetails}
      />
    </Stack.Navigator>
  );
};
