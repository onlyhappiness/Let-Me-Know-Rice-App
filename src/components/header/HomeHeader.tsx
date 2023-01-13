import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface Prop {
  title: string | undefined;
}

export default ({title}: Prop) => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Text>{title}</Text>
      </View>

      <View style={styles.center} />

      <View style={styles.right}>
        <View style={styles.iconContainer}>
          <Text>검색아이콘</Text>
          <Text>종 아이콘</Text>
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
  center: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  iconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
