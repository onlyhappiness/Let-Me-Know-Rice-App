import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

interface Prop {
  title: string;
  onPress: () => void;
}

export default ({title, onPress}: Prop) => {
  return (
    <View style={styles.button}>
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
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
