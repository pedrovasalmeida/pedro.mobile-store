import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './src/routes';
import {colors} from './src/styles/globals';
import tailwind from 'twrnc';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = isDarkMode ? colors.bgDark : colors.bgLight;

  return (
    <SafeAreaView style={tailwind`${backgroundStyle}`}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
