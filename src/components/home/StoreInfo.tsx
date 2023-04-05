import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

export default ({storeDetail}: any) => {
  return (
    <View style={{flex: 1, padding: 15}}>
      <Text style={styles.infoText}>영업정보</Text>

      <View style={styles.textBox}>
        <Text style={styles.left}>상호명</Text>
        <Text style={styles.right}>{storeDetail?.name}</Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.left}>운영일</Text>
        <Text style={styles.right}>{storeDetail?.operationHours}</Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.left}>휴무일</Text>
        <Text style={styles.right}>
          {storeDetail?.closedDays ? storeDetail?.closedDays : '연중무휴'}
        </Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.left}>전화번호</Text>
        <Text style={styles.right}>{storeDetail?.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 30,
    paddingTop: 10,
  },
  textBox: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  left: {
    width: width / 2 - 50,
    fontSize: 15,
  },
  right: {
    width: width / 2 - 20,
    fontSize: 15,
  },
});
