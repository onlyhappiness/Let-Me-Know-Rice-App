import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Review from '../screens/Review/Review';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Review" component={Review} />
    </Stack.Navigator>
  );
};
