import {View, StyleSheet, ViewStyle, TextInput} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';

interface IProps {
  containerStyle?: ViewStyle;
}

export default (props: any, {containerStyle}: IProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.input}
        {...props}
        placeholderTextColor={COLOR.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLOR.inputBackground,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    letterSpacing: -0.28,
  },
});
