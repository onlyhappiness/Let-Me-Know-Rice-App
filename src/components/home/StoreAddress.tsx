import {View, Text} from 'react-native';
import React from 'react';

const StoreAddress = ({storeDetail}: any) => {
  return (
    <View style={{flex: 1, padding: 15}}>
      <Text>주소: {storeDetail?.address}</Text>
    </View>
  );
};

export default StoreAddress;
