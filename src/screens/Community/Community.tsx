import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import HomeLayout from '../../layouts/HomeLayout';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../theme/color';
import Review from '../Review/Review';

const {width, height} = Dimensions.get('screen');

const renderScene = SceneMap({
  first: Review,
  second: Review,
  third: Review,
});

export default () => {
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);

  const [routes, setRoutes] = useState([
    {key: 'first', title: '리뷰'},
    {key: 'second', title: '오늘의 메뉴'},
    {key: 'third', title: '모집'},
  ]);

  return (
    <HomeLayout title="커뮤니티">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.tabContainer}>
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: width}}
              style={styles.tabView}
              renderTabBar={props => (
                <TabBar
                  {...props}
                  renderLabel={({route, color}) => (
                    <Text style={{color: 'black', margin: 8}}>
                      {route.title}
                    </Text>
                  )}
                  indicatorStyle={styles.tabbar}
                  style={{backgroundColor: COLOR.background}}
                />
              )}
            />
          </View>

          {index === 0 && <Review />}
          {index === 1 && <Review />}
          {index === 2 && <Review />}
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  tabContainer: {
    marginTop: 15,
  },
  tabView: {
    borderBottomColor: COLOR.main,
    flex: 1,
  },
  tabbar: {
    borderBottomWidth: 2,
    borderBottomColor: COLOR.main,
  },
});
