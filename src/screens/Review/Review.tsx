import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useGetAllReview} from '../../hooks/review.query';
import ReviewCard from '../../components/review/ReviewCard';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  const {bottom} = useSafeAreaInsets();

  const {data} = useGetAllReview();

  // console.log('리뷰 데이터: ', data);

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={ReviewCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
