import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Prop {
  title: string;
  onPress: () => void;
}

export default ({title, onPress}: Prop) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={[styles.button, {marginBottom: bottom}]}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
  },
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
