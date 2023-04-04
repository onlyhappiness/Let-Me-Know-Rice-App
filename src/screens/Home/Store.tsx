import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useGetStoreDetail} from '../../hooks/store.query';
import {useMenu} from '../../hooks/menu.query';

const {width, height} = Dimensions.get('screen');

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {COLOR} from '../../theme/color';

const FirstRoute = () => <View style={{flex: 1}} />;

const SecondRoute = () => <View style={{flex: 1}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default ({route}) => {
  const {storeId} = route.params;

  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'first', title: '주소'},
    {key: 'second', title: '편의정보'},
  ]);

  const [store, setStore] = useState({
    id: 5,
    createdAt: '2023-03-21T12:19:31.397Z',
    updatedAt: '2023-03-31T09:41:20.861Z',
    name: '빵집1',
    address: '타타타로 123',
    phone: '8881111',
    content: '빵집입니다.',
    operationHours: '월,화,수,목,금',
    closedDays: '',
  });

  const [menu, setMenu] = useState([
    {
      id: 2,
      createdAt: '2023-03-29T13:44:58.473Z',
      updatedAt: '2023-03-29T13:44:58.473Z',
      name: '마카롱',
      price: '2500',
    },
  ]);

  //   const {data: storeDetail} = useGetStoreDetail(storeId);

  //   const {data: menu} = useMenu(storeId);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
      <View style={styles.container}>
        <Image style={styles.image}></Image>
        <View style={styles.centerBox}>
          <Text style={styles.storeName}>{store?.name}</Text>
          <Text style={styles.storeContent}>{store?.content}</Text>
        </View>

        <View style={{marginBottom: 30}} />

        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: width}}
          style={{
            borderBottomColor: COLOR.main,
          }}
          renderTabBar={props => (
            <TabBar
              {...props}
              renderLabel={({route, color}) => (
                <Text style={{color: 'black', margin: 8}}>{route.title}</Text>
              )}
              indicatorStyle={{
                borderBottomWidth: 2,
                borderBottomColor: COLOR.main,
              }}
              style={{backgroundColor: COLOR.background}}
            />
          )} // <-- add this line

          // renderTabBar={props => (
          //   <TabBar
          //     {...props}
          //     indicatorStyle={{
          //       backgroundColor: 'rgb(240, 80, 20)',
          //     }}
          //     style={{
          //       backgroundColor: 'white',
          //       shadowColor: 'transparent',
          //     }}
          //     pressColor={'transparent'}
          //   />
          // )}
        />

        <Text>주소</Text>
        <Text>주소 {store?.address}</Text>

        <View style={{marginBottom: 30}} />

        <Text>편의정보</Text>
        <Text>운영일 {store?.operationHours}</Text>
        <Text>휴무일 {store?.closedDays}</Text>
        <Text>전화번호: {store?.phone}</Text>

        <View style={{marginBottom: 30}} />
        <Text>메뉴</Text>
        {menu?.map((item: any) => {
          return (
            <View key={item?.id}>
              <Text>{item?.name}</Text>
              <Text>{item?.price}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
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
