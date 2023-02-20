import {Text, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';

interface Prop {
  title: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
}

export default ({title, onPress, containerStyle}: Prop) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 10,
    // margin: 10,
    backgroundColor: COLOR.main,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
