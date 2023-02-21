import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import RegisterStepOne from '../screens/Auth/RegisterStepOne';
import RegisterStepTwo from '../screens/Auth/RegisterStepTwo';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthLogin" component={Login} />

      {/* TODO: 회원가입  */}
      <Stack.Screen name="RegisterStepOne" component={RegisterStepOne} />
      <Stack.Screen name="RegisterStepTwo" component={RegisterStepTwo} />
    </Stack.Navigator>
  );
};
