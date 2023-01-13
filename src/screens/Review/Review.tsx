import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';

export default () => {
  return (
    <HomeLayout title="리뷰">
      <View style={styles.container}>
        <Text>Review</Text>
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
