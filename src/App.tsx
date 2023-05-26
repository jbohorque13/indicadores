import React from 'react';
import { useColorScheme } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
// utils
import { navigationRef } from '~/utils/navigation';
// components
import Home from '~/screens/Home';
import Detail from '~/screens/Detail';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  dark: true,
};

const App = () => {
  const scheme = useColorScheme();
  return  (
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? DarkTheme : MyTheme}
    >
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{
              headerTitle: 'Indicadores',
              headerTintColor: '#000000'
            }} />
          <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;