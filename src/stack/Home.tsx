import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';
import Home from '../screens/Home/Home';
// import Store from '../screens/Home/Store';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Store" component={Store} /> */}
    </Stack.Navigator>
  );
};
