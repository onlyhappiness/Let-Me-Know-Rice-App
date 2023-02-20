import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';

export default () => {
  return (
    <DefaultLayout title="회원가입">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <Text>회원가입 페이지</Text>
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
