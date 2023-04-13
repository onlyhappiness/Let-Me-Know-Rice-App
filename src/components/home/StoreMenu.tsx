import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width} = Dimensions.get('screen');

import Logo from '../../assets/logo.svg';

export default ({menu}: any) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={{flex: 1, padding: 15, paddingBottom: bottom}}>
      {menu?.map((item: any) => {
        console.log('item: ', item);
        return (
          <View style={styles.menuCard} key={item?.id}>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item?.name}</Text>
              <Text>{Number(item?.price)?.toLocaleString('ko-KR')}원</Text>
            </View>
            <View style={styles.imageContainer}>
              {item?.image ? (
                <Image source={{uri: `${item?.image}`}} style={styles.image} />
              ) : (
                <Logo width={width / 2 - 30} />
              )}
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

  imageContainer: {
    borderColor: '#d6d6d6',
    borderWidth: 0.5,
    borderRadius: 10,
    width: width / 2 - 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width / 2 - 30,
    height: 110,
    borderRadius: 10,
    resizeMode: 'center',
  },
});
