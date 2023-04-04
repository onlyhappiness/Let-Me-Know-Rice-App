import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNotice} from '../../hooks/notice.query';

const {width, height} = Dimensions.get('screen');

export default () => {
  // const {data} = useNotice();

  return (
    <View>
      <Text>나와</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: height / 4.5,
    alignItems: 'center',
    // padding: 30,
    marginBottom: 30,
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
