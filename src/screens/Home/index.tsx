import React from 'react';
import {Button, Text, View} from 'react-native';
import tailwind from 'twrnc';
import {ScreensName} from '..';

export const Home: React.FC = ({navigation}) => {
  return (
    <View style={tailwind`bg-zinc-900 w-full h-full`}>
      <Text style={tailwind`text-zinc-50`}>Home</Text>
      <Button
        title="Go to Category"
        onPress={() => navigation.navigate(ScreensName.home.category)}
      />
    </View>
  );
};
