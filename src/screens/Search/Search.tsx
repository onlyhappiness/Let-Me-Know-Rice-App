import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';

export default () => {
  return (
    <HomeLayout title="검색">
      <View style={styles.container}>
        <Text>Search</Text>
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
