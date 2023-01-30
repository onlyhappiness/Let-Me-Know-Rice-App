import React, {useEffect, useMemo, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import moment from 'moment';
import SimpleToast from 'react-native-simple-toast';

import Auth from '../stack/Auth';
import Tab from '../stack/Tab';
import {useRecoilValue} from 'recoil';
import {AuthState} from '../recoil/AuthState';
import {BackHandler} from 'react-native';

export default () => {
  const ref = useRef();

  const exit_time = useRef(0);

  const userInfo = useRecoilValue(AuthState);

  const Stack = useMemo(() => createNativeStackNavigator(), []);

  // TODO: 뒤로 가기 두번 클릭 시 앱 종료
  useEffect(() => {
    const onBackPress = () => {
      const canGoBack = ref.current?.canGoBack();
      if (!canGoBack && exit_time.current < moment().unix() - 3) {
        exit_time.current = moment().unix();
        SimpleToast.show('한번 더 클릭시 종료합니다.', SimpleToast.SHORT);
        return true;
      } else if (!canGoBack) {
        BackHandler.exitApp();
      }
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, []);

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
