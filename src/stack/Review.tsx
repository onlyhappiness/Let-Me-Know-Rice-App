import {View, Text} from 'react-native';
import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Review = () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Review" component={Review} />
    </Stack.Navigator>
  );
};

export default Review;
