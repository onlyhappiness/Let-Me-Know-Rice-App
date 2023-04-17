import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Auth from '../stack/Auth';
import Tab from '../stack/Tab';
import quitApp from '../util/quitApp';
import {useSelector} from 'react-redux';
import checkUser from '../util/checkUser';
import ReviewDetail from '../screens/Review/ReviewDetail';
import StoreDetail from '../screens/Home/StoreDetail';
import Post from '../screens/Home/Post';
import Store from '../screens/Home/Store';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  const {principal: loginInfo} = useSelector((state: any) => state.auth);

  checkUser();

  quitApp();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!loginInfo ? (
          <Stack.Screen name="AuthStack" component={Auth} />
        ) : (
          <>
            <Stack.Screen name="TabStack" component={Tab} />
            <Stack.Screen name="Post" component={Post} />
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="StoreDetail" component={StoreDetail} />
            <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
