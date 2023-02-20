import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

interface Prop {
  title: string | undefined;
}

export default ({title}: Prop) => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.center} />

      <View style={styles.right}>
        <View style={styles.iconContainer}>
          {/* <Text>검색아이콘</Text> */}
          <FeatherIcon name="search" size={22} />
          {/* <Text>종 아이콘</Text> */}
          <FeatherIcon name="send" size={22} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  left: {
    flex: 1,
  },
  title: {
    fontSize: 16,
  },
  center: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    // backgroundColor: 'gray',
  },
  iconContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
