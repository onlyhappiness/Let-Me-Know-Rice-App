import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface IProp {
  title: string | undefined;
}

export default ({title}: IProp) => {
  return (
    <View style={styles.header}>
      <View style={styles.left} />
      <View style={styles.center}>
        <Text>{title}</Text>
      </View>
      <View style={styles.right} />
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
  title: {
    fontSize: 16,
    fontWeight: '600',
    // color:
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
