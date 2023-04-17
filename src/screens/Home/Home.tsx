import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import OverviewCard from '../../components/OverviewCard';
import {useGetStore} from '../../hooks/store.query';
import Banner from '../../components/home/Banner';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../theme/color';

export default () => {
  const navigation = useNavigation<any>();

  const {data, isLoading} = useGetStore();

  return (
    <HomeLayout title="주소">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        {isLoading && <ActivityIndicator color={COLOR.main} />}
        <View style={styles.container}>
          <Banner />

          {/* FIXME: flatlist로 수정 */}
          <View style={styles.list}>
            {/* <View style={styles.pick}>
              <Text style={styles.pickText}>유저들의 PICK 맛집</Text>
              <TouchableOpacity
                onPress={() => {
                  console.log('가게 페이지로 이동');
                  navigation.navigate('Store');
                }}>
                <Text>전체보기</Text>
              </TouchableOpacity>
            </View> */}

            {data?.map((item: any) => {
              return (
                <View style={styles.overview} key={item?.id}>
                  <OverviewCard item={item} />
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
  },
  banner: {
    backgroundColor: 'gray',
    width: '100%',
    alignItems: 'center',
    padding: 30,
    marginBottom: 30,
  },
  list: {
    width: '100%',
    alignItems: 'center',
  },
  pick: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
  pickText: {
    fontSize: 16,
    fontWeight: '800',
    paddingVertical: 10,
  },
  overview: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 30,
  },
});
