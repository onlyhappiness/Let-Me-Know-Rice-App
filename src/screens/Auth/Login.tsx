import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import BottomButton from '../../components/BottomButton';
import {useRecoilState} from 'recoil';
import {AuthState} from '../../recoil/AuthState';

const Login = () => {
  const [userInfo, setUserInfo] = useRecoilState(AuthState);

  const onHandleLogin = () => {
    setUserInfo(true);
  };

  return (
    <AuthLayout
      title={'로그인'}
      extraChildren={
        <BottomButton title="로그인" onPress={() => onHandleLogin()} />
      }>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <Text>로그인</Text>
        </View>
      </ScrollView>
    </AuthLayout>
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
