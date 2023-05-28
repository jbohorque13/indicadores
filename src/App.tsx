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
import Graph from '~/screens/Graph';
// utils
import { routes } from './utils/routes';
// geo
import Geolocation from '@react-native-community/geolocation';

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'whenInUse',
  locationProvider: 'auto',
})

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
        <Stack.Navigator initialRouteName={routes.HOME.routeName}>
          <Stack.Screen name={routes.HOME.routeName} component={Home} options={{
              headerTitle: 'Indicadores',
              headerTintColor: '#000000'
            }} />
          <Stack.Screen name={routes.DETAIL.routeName} component={Detail} />
          <Stack.Screen name={routes.GRAPH.routeName} component={Graph} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default React.memo(App);