import React, {useEffect, useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IonIcon from 'react-native-vector-icons/Ionicons';

import notifee from '@notifee/react-native';

import Geolocation from 'react-native-geolocation-service';
import {Platform} from 'react-native';

import Home from './Home';
import Favorite from './Favorite';
// import Review from './Review';
import Setting from './Setting';
import Community from './Community';
import {COLOR} from '../theme/color';
import Search from './Search';

export default () => {
  const Tab = useMemo(() => createBottomTabNavigator(), []);

  // TODO: notifee ios용 권한
  useEffect(() => {
    (async () => {
      await notifee.requestPermission();
    })();
  }, []);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse');
    }
  }, []);

  Geolocation.getCurrentPosition(
    position => {
      console.log('내 위치:', position);
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tabBarIcon: ({focused, color}) => {
          let iconName = '';

          if (route.name === 'FavoriteStack') {
            // iconName = 'heart-outline';
            iconName = 'heart';
          } else if (route.name === 'SearchStack') {
            iconName = 'search';
          }
          // else if (route.name === 'ReviewStack') {
          //   // iconName = 'chatbubble-ellipses-outline';
          //   iconName = 'chatbubble-ellipses';
          // }
          else if (route.name === 'HomeStack') {
            // iconName = 'home-outline';
            iconName = 'home';
          } else if (route.name === 'CommunityStack') {
            // iconName = 'chatbubbles-outline';
            iconName = 'chatbubbles';
          } else if (route.name === 'SettingStack') {
            // iconName = 'happy-outline';
            iconName = 'happy';
          }

          return (
            <IonIcon
              name={iconName}
              size={24}
              color={focused ? COLOR.main : '#B1BDC5'}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: COLOR.main,
        tabBarInactiveTintColor: '#B1BDC5',
      })}>
      <Tab.Screen
        name="SearchStack"
        component={Search}
        options={{title: '검색'}}
      />

      <Tab.Screen
        name="FavoriteStack"
        component={Favorite}
        options={{title: '찜'}}
      />
      {/* FIXME: */}
      {/* <Tab.Screen
        name="ReviewStack"
        component={Review}
        options={{title: '리뷰왕'}}
      /> */}

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
