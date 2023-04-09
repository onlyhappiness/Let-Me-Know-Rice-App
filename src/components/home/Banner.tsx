import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNotice} from '../../hooks/notice.query';

const {width, height} = Dimensions.get('screen');

export default () => {
  const {data} = useNotice();

  console.log('notice 데이터:', data);

  return (
    <FlatList
      style={styles.container}
      data={data}
      horizontal
      pagingEnabled
      // onScroll={item => {
      //   console.log('------------------------');
      //   console.log('스크롤 item 나와::', item);
      // }}
      showsHorizontalScrollIndicator
      keyExtractor={item => item.id}
      renderItem={(item: any) => {
        return (
          <View style={styles.banner}>
            <Text>배너</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: 'gray',
    marginBottom: 30,
  },
  banner: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
