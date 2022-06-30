import React from 'react';
import {Text, View} from 'react-native';
import tailwind from 'twrnc';

export const Category: React.FC = () => {
  return (
    <View style={tailwind`bg-zinc-900 w-full h-full`}>
      <Text style={tailwind`text-zinc-50`}>Category</Text>
    </View>
  );
};
