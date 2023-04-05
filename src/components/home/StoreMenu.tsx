import {View, Text} from 'react-native';
import React from 'react';

const StoreMenu = ({storeDetail, menu}: any) => {
  return (
    <View style={{flex: 1, padding: 15}}>
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
  );
};

export default StoreMenu;
