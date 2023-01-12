import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorite from '../screens/Favorite/Favorite';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
};
