import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import FavoriteCard from '../../components/FavoriteCard';
import {useFavorite} from '../../hooks/favorite.query';

export default () => {
  const {data} = useFavorite();

  console.log('찜한 데이터: ', data);

  return (
    <HomeLayout title="찜한 목록">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.list}>
            {data?.map((item: any) => {
              return (
                <View style={styles.overview} key={item?.id}>
                  <FavoriteCard item={item} />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  list: {
    width: '100%',
    alignItems: 'center',
  },
  overview: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 30,
  },
});
