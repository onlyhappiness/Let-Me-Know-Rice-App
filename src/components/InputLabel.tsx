import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';

interface IInputLabel {
  labelText?: string;
  bottomText?: string;
  containerStyle?: ViewStyle;
}

export default React.forwardRef<any, TextInputProps & IInputLabel>(
  ({labelText, bottomText, containerStyle, ...props}, ref) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.label}>{labelText}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            ref={ref}
            {...props}
            placeholderTextColor="#bec3cf"
          />
        </View>
        <Text style={styles.bottomText}>{bottomText}</Text>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    marginBottom: 8,
    paddingLeft: 2,
    fontSize: 14,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: COLOR.inputBackground,
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
    height: 44,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    letterSpacing: -0.28,
  },
  bottomText: {
    color: 'red',
    fontSize: 10,
  },
});
