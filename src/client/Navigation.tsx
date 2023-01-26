import React, {useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../stack/Auth';
import Tab from '../stack/Tab';
import {useRecoilValue} from 'recoil';
import {AuthState} from '../recoil/AuthState';

export default () => {
  const userInfo = useRecoilValue(AuthState);

  const Stack = useMemo(() => createNativeStackNavigator(), []);

  // TODO: 뒤로 가기 두번 클릭 시 앱 종료
  // useEffect(() => {

  // }, []);

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
