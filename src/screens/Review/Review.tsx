import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useGetAllReview} from '../../hooks/review.query';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../assets/logo.svg';

const {width, height} = Dimensions.get('screen');

export default () => {
  const navigation = useNavigation<any>();

  const {bottom} = useSafeAreaInsets();

  const {data} = useGetAllReview();

  // RenderItem
  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        key={item?.id}
        style={styles.cardContainer}
        onPress={() => {
          navigation.navigate('ReviewDetail', {
            reviewId: item?.id,
          });
        }}>
        <View style={styles.card}>
          <Logo width={120} height={120} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cardContainer: {
    width: width / 3,
    height: height / 6 - 10,
    padding: 3,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
