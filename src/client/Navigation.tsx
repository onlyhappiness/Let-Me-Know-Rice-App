import React, {useEffect, useMemo, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import moment from 'moment';
// import SimpleToast from 'react-native-simple-toast';

import Auth from '../stack/Auth';
import Tab from '../stack/Tab';
import {useRecoilValue} from 'recoil';
import {AuthState} from '../recoil/AuthState';
// import {BackHandler} from 'react-native';
import quitApp from '../util/quitApp';

export default () => {
  const userInfo = useRecoilValue(AuthState);

  const Stack = useMemo(() => createNativeStackNavigator(), []);

  quitApp();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userInfo ? (
          <Stack.Screen name="AuthStack" component={Auth} />
        ) : (
          <Stack.Screen name="TabStack" component={Tab} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
