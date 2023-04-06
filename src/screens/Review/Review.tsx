import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default () => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <Text>Review</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
