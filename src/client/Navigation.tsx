import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../stack/Auth';
import Tab from '../stack/Tab';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={Auth} />
        <Stack.Screen name="TabStack" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
