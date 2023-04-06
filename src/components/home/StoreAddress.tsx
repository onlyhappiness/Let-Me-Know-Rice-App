import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {height} = Dimensions.get('screen');

export default ({storeDetail}: any) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={{flex: 1, padding: 15, paddingBottom: bottom}}>
      <View style={styles.map}>
        <Text>카카오 맵</Text>
      </View>
      <Text style={styles.address}>{storeDetail?.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: height / 5,
    backgroundColor: 'gray',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  address: {
    fontSize: 14,
  },
});
