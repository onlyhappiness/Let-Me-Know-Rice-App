import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useGetStoreDetail} from '../../hooks/store.query';
import {useMenu} from '../../hooks/menu.query';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {COLOR} from '../../theme/color';

import StoreAddress from '../../components/home/StoreAddress';
import StoreInfo from '../../components/home/StoreInfo';
import StoreMenu from '../../components/home/StoreMenu';

const renderScene = SceneMap({
  first: StoreAddress,
  second: StoreInfo,
  third: StoreMenu,
});

const {width, height} = Dimensions.get('screen');

export default ({route}) => {
  const {storeId} = route.params;

  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'first', title: '주소'},
    {key: 'second', title: '편의정보'},
    {key: 'third', title: '메뉴'},
  ]);

  const {data: storeDetail} = useGetStoreDetail(storeId);

  const {data: menu} = useMenu(storeId);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
      <Image style={styles.image} />

      <View style={styles.centerBox}>
        <Text style={styles.storeName}>{storeDetail?.name}</Text>
        <Text style={styles.storeContent}>{storeDetail?.content}</Text>
      </View>

      <View style={{marginBottom: 30}} />

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: width}}
        style={{
          borderBottomColor: COLOR.main,
          flex: 1,
        }}
        renderTabBar={props => (
          <TabBar
            {...props}
            // scrollEnabled={}
            renderLabel={({route, color}) => (
              <Text style={{color: 'black', margin: 8}}>{route.title}</Text>
            )}
            indicatorStyle={{
              borderBottomWidth: 2,
              borderBottomColor: COLOR.main,
            }}
            style={{backgroundColor: COLOR.background}}
          />
        )}
      />

      {/* <Text>주소</Text>
        <Text>주소 {storeDetail?.address}</Text>

        <View style={{marginBottom: 30}} />

        <Text>편의정보</Text>
        <Text>운영일 {storeDetail?.operationHours}</Text>
        <Text>휴무일 {storeDetail?.closedDays}</Text>
        <Text>전화번호: {storeDetail?.phone}</Text>

        <View style={{marginBottom: 30}} />
        <Text>메뉴</Text>
        {menu?.map((item: any) => {
          return (
            <View key={item?.id}>
              <Text>{item?.name}</Text>
              <Text>{item?.price}</Text>
            </View>
          );
        })} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: height / 3.5,
    backgroundColor: 'gray',
    marginBottom: 30,
  },
  centerBox: {
    alignItems: 'center',
  },
  storeName: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 10,
  },
  storeContent: {
    fontSize: 14,
    color: '#808080',
  },
});
