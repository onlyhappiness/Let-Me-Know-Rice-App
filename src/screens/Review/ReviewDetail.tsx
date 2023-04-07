import {View, Text} from 'react-native';
import React from 'react';

const ReviewDetail = ({route}: any) => {
  console.log('route', route);

  const {reviewId} = route.param;

  console.log(reviewId);

  return (
    <View>
      <Text>ReviewDetail</Text>
    </View>
  );
};

export default ReviewDetail;
