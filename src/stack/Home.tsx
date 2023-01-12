import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';

const Home = () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Home;
