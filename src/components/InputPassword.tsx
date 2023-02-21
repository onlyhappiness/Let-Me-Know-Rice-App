import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextInputProps,
  TextInput,
} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';

interface IInputPassword {
  containerStyle?: ViewStyle;
  labelText?: string;
  validationCheck?: boolean;
  bottomText?: string;
}

export default React.forwardRef<any, TextInputProps & IInputPassword>(
  ({containerStyle, labelText, validationCheck, bottomText, ...props}, ref) => {
    return (
      <View style={[styles.container, containerStyle]}>
        {labelText && <Text style={styles.label}>{labelText}</Text>}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            ref={ref}
            {...props}
            placeholderTextColor="#bec3cf"
          />
        </View>
        {validationCheck ? null : (
          <Text style={styles.bottomText}>{bottomText}</Text>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: COLOR.inputBackground,
    justifyContent: 'center',
    borderRadius: 8,
    height: 44,
  },
  input: {
    paddingHorizontal: 15,
    // paddingVertical: 10,
    fontSize: 14,
    letterSpacing: -0.28,
  },
  bottomText: {
    color: 'red',
    fontSize: 10,
  },
});
