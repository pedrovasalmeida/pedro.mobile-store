import React from 'react';
import {Text, View} from 'react-native';
import tailwind from 'twrnc';

export const ProductDetails: React.FC = () => {
  return (
    <View style={tailwind`bg-red-900 w-full h-full`}>
      <Text>Product Page</Text>
    </View>
  );
};
