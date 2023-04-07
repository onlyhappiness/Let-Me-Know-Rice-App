import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

import Logo from '../../assets/logo.svg';

const {width, height} = Dimensions.get('screen');

export default ({item, index}) => {
  return (
    <View key={item?.id} style={styles.cardContainer}>
      <View style={styles.card}>
        <Logo width={120} height={120} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width / 3,
    height: height / 6 - 10,
    padding: 2,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
