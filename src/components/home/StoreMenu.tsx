import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

export default ({storeDetail, menu}: any) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 15,
      }}>
      {menu?.map((item: any) => {
        return (
          <View style={styles.menuCard} key={item?.id}>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item?.name}</Text>
              <Text>{Number(item?.price)?.toLocaleString('ko-KR')}원</Text>
            </View>
            <View style={styles.image}>
              <Text>이미지</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  menuCard: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 15,
    height: 130,
  },
  textContainer: {
    // padding: 20,
    paddingLeft: 15,
    paddingTop: 15,
    width: width / 2 - 20,
  },
  name: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: '800',
  },
  price: {},

  image: {
    backgroundColor: 'gray',
    width: width / 2 - 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
