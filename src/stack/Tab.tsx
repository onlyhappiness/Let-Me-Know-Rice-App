import React, {useEffect, useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IonIcon from 'react-native-vector-icons/Ionicons';

import notifee from '@notifee/react-native';

import Home from './Home';
import Favorite from './Favorite';
import Review from './Review';
import Setting from './Setting';
import Community from './Community';

export default () => {
  const Tab = useMemo(() => createBottomTabNavigator(), []);

  // TODO: notifee ios용 권한
  useEffect(() => {
    (async () => {
      await notifee.requestPermission();
    })();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tabBarIcon: ({focused, color}) => {
          let iconName = '';

          if (route.name === 'FavoriteStack') {
            iconName = 'heart-outline';
          } else if (route.name === 'ReviewStack') {
            iconName = 'chatbubble-ellipses-outline';
          } else if (route.name === 'HomeStack') {
            iconName = 'home-outline';
          } else if (route.name === 'CommunityStack') {
            iconName = 'chatbubbles-outline';
          } else if (route.name === 'SettingStack') {
            iconName = 'happy-outline';
          }

          return <IonIcon name={iconName} size={22} />;
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="FavoriteStack"
        component={Favorite}
        options={{title: '찜'}}
      />
      <Tab.Screen
        name="ReviewStack"
        component={Review}
        options={{title: '리뷰왕'}}
      />
      <Tab.Screen name="HomeStack" component={Home} options={{title: '홈'}} />
      <Tab.Screen
        name="CommunityStack"
        component={Community}
        options={{title: '커뮤니티'}}
      />
      <Tab.Screen
        name="SettingStack"
        component={Setting}
        options={{title: '내 정보'}}
      />
    </Tab.Navigator>
  );
};
