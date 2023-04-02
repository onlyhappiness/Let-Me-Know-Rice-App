import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {useGetStoreDetail} from '../../hooks/store.query';
import {useMenu} from '../../hooks/menu.query';

export default ({route}) => {
  const {storeId} = route.params;

  console.log('전달된 storeId: ', storeId);

  const {data: storeDetail} = useGetStoreDetail(storeId);

  const {data: menu} = useMenu(storeId);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
      <View style={styles.container}>
        <Text>가게 이름: {storeDetail?.name}</Text>
        <Text>가게 이름: {storeDetail?.content}</Text>

        <View style={{marginBottom: 30}} />

        <Text>주소</Text>
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
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
