import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useGetStoreDetail} from '../../hooks/store.query';
import {useMenu} from '../../hooks/menu.query';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {COLOR} from '../../theme/color';

import StoreAddress from '../../components/home/StoreAddress';
import StoreInfo from '../../components/home/StoreInfo';
import StoreMenu from '../../components/home/StoreMenu';
import {useNavigation} from '@react-navigation/native';

const renderScene = SceneMap({
  first: StoreAddress,
  second: StoreInfo,
  third: StoreMenu,
});

const {width, height} = Dimensions.get('screen');

export default ({route}: any) => {
  const navigation = useNavigation();

  const {storeId} = route.params;

  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'first', title: '주소'},
    {key: 'second', title: '메뉴'},
    {key: 'third', title: '정보'},
  ]);

  const {data: storeDetail} = useGetStoreDetail(storeId);

  const {data: menu} = useMenu(storeId);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
      <Image style={styles.image} />
      {/* TODO: 이미지 안에 버튼 추가 */}
      <TouchableOpacity style={styles.left} onPress={() => navigation.goBack()}>
        <Text>나와</Text>
      </TouchableOpacity>

      <View style={styles.centerBox}>
        <Text style={styles.storeName}>{storeDetail?.name}</Text>
        <Text style={styles.storeContent}>{storeDetail?.content}</Text>
      </View>

      <View>
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
                <Text style={{color: 'black', margin: 8}}>{route.title}</Text>
              )}
              indicatorStyle={styles.tabbar}
              style={{backgroundColor: COLOR.background}}
            />
          )}
        />
      </View>

      {index === 0 && <StoreAddress storeDetail={storeDetail} />}
      {index === 1 && <StoreMenu storeDetail={storeDetail} menu={menu} />}
      {index === 2 && <StoreInfo storeDetail={storeDetail} />}
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
    marginBottom: 30,
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
  tabView: {
    borderBottomColor: COLOR.main,
    flex: 1,
  },
  tabbar: {
    borderBottomWidth: 2,
    borderBottomColor: COLOR.main,
  },
});
