import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Prop {
  title: string;
  onPress: () => void;
  active?: any;
}

export default ({title, onPress, active}: Prop) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={[styles.button, {marginBottom: bottom}]}>
      <TouchableOpacity
        style={[
          styles.container,
          active
            ? {backgroundColor: COLOR.main}
            : {
                backgroundColor: COLOR.input,
              },
        ]}
        onPress={active ? onPress : () => null}>
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
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
