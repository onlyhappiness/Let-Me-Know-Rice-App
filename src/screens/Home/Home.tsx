import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import OverviewCard from '../../components/OverviewCard';

export default () => {
  const [data, setData] = useState([]);

  return (
    <HomeLayout title="주소">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.banner}>
            <Text>배너</Text>
          </View>

          <View style={styles.list}>
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            {/* {data?.map((v, i) => {
              return <OverviewCard key={i} />;
            })} */}
          </View>
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    backgroundColor: 'gray',
    width: '100%',
    alignItems: 'center',
    padding: 30,
    marginBottom: 40,
  },
  list: {},
});
