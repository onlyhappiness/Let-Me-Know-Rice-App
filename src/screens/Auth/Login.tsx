import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';

const Login = () => {
  return (
    <DefaultLayout title={'로그인'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <Text>로그인</Text>
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

export default Login;
