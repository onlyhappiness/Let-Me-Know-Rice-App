import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';

export default () => {
  return (
    <DefaultLayout title="유저 쪽지함">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <Text>유저 쪽지함</Text>
        </View>
      </ScrollView>
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
