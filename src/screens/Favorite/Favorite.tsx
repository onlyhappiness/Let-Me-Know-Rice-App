import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import FavoriteCard from '../../components/FavoriteCard';

export default () => {
  return (
    <HomeLayout title="찜한 목록">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.list}>
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
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
  },
  list: {
    width: '100%',
    alignItems: 'center',
  },
});
