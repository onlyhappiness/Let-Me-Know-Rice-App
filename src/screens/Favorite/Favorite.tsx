import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import FavoriteCard from '../../components/FavoriteCard';

export default () => {
  const [data, setData] = useState([
    {
      id: 2,
      createdAt: '2023-03-16T13:52:18.045Z',
      updatedAt: '2023-03-21T12:05:37.000Z',
      Store: {
        id: 1,
        createdAt: '2023-03-04T17:04:30.393Z',
        updatedAt: '2023-03-31T09:41:05.369Z',
        name: '치킨집1',
        address: '치킨 수정 신림점444',
        phone: '8881111',
        content: '치치치치킨집입니다.',
        operationHours: '월~금',
        closedDays: '',
      },
    },
  ]);

  return (
    <HomeLayout title="찜한 목록">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.list}>
            {data?.map((item: any) => {
              return <FavoriteCard key={item?.id} item={item} />;
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
  list: {
    width: '100%',
    alignItems: 'center',
  },
});
