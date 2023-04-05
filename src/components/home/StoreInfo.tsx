import {View, Text} from 'react-native';
import React from 'react';

const StoreInfo = ({storeDetail}: any) => {
  return (
    <View style={{flex: 1, padding: 15}}>
      <Text>편의정보</Text>
      <Text>운영일 {storeDetail?.operationHours}</Text>
      <Text>휴무일 {storeDetail?.closedDays}</Text>
      <Text>전화번호: {storeDetail?.phone}</Text>
    </View>
  );
};

export default StoreInfo;
