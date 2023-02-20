import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthLogin" component={Login} />

      {/* TODO: 회원가입  */}
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
