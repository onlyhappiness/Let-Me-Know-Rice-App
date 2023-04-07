import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';

export default ({route}: any) => {
  console.log('route', route);

  const {reviewId} = route.params;

  console.log(reviewId);

  return (
    <DefaultLayout title="리뷰 상세">
      <View style={styles.container}>
        <Text>ReviewDetail</Text>
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
