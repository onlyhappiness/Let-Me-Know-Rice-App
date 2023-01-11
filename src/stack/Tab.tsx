import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Favorite from './Favorite';
import Review from './Review';
import Setting from './Setting';

export default () => {
  const Tab = useMemo(() => createBottomTabNavigator(), []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={Home} />
      <Tab.Screen name="FavoriteStack" component={Favorite} />
      <Tab.Screen name="ReviewStack" component={Review} />
      <Tab.Screen name="ReviewStack" component={Review} />
      <Tab.Screen name="SettingStack" component={Setting} />
    </Tab.Navigator>
  );
};
