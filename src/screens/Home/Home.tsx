import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import OverviewCard from '../../components/OverviewCard';
import {useGetStore} from '../../hooks/store.query';
import Banner from '../../components/home/Banner';

export default () => {
  // const {data} = useGetStore();

  const [data, setData] = useState([
    {
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
    {
      id: 5,
      createdAt: '2023-03-21T12:19:31.397Z',
      updatedAt: '2023-03-31T09:41:20.861Z',
      name: '빵집1',
      address: '타타타로 123',
      phone: '8881111',
      content: '빵집입니다.',
      operationHours: '월,화,수,목,금',
      closedDays: '',
    },
    {
      id: 6,
      createdAt: '2023-03-04T17:04:30.393Z',
      updatedAt: '2023-03-31T09:41:05.371Z',
      name: '치킨집2',
      address: '치킨 수정 신림점444',
      phone: '8881111',
      content: '치치치치킨집입니다.',
      operationHours: '월~금',
      closedDays: '',
    },
    {
      id: 7,
      createdAt: '2023-03-21T12:19:31.397Z',
      updatedAt: '2023-03-31T09:41:20.871Z',
      name: '빵집2',
      address: '타타타로 123',
      phone: '8881111',
      content: '빵집입니다.',
      operationHours: '월,화,수,목,금',
      closedDays: '',
    },
    {
      id: 8,
      createdAt: '2023-03-21T12:19:31.397Z',
      updatedAt: '2023-03-31T09:41:20.872Z',
      name: '빵집3',
      address: '타타타로 123',
      phone: '8881111',
      content: '빵집입니다.',
      operationHours: '월,화,수,목,금',
      closedDays: '',
    },
    {
      id: 9,
      createdAt: '2023-03-21T12:19:31.397Z',
      updatedAt: '2023-03-31T09:41:20.874Z',
      name: '빵집4',
      address: '타타타로 123',
      phone: '8881111',
      content: '빵집입니다.',
      operationHours: '월,화,수,목,금',
      closedDays: '',
    },
  ]);

  return (
    <HomeLayout title="주소">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <Banner />

          {/* FIXME: flatlist로 수정 */}
          <View style={styles.list}>
            <View style={styles.pick}>
              <Text style={styles.pickText}>픽 맛집</Text>
              <Text>전체보기</Text>
            </View>

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
