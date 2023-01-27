import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import BottomButton from '../../components/BottomButton';
import {useRecoilState} from 'recoil';
import {AuthState} from '../../recoil/AuthState';
import DefaultInput from '../../components/DefaultInput';

const Login = () => {
  const [userInfo, setUserInfo] = useRecoilState(AuthState);

  // 로그인
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

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
          <DefaultInput
            placeholder={'아이디를 입력하세요.'}
            value={userId}
            onChangeText={(t: string) => setUserId(t.trim())}
          />

          <DefaultInput
            placeholder={'비밀번호를 입력하세요.'}
            secureTextEntry
            value={password}
            onChangeText={(t: string) => setPassword(t.trim())}
          />
        </View>
      </ScrollView>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    // backgroundColor: 'gray',
    // alignItems: 'center',
  },
});

export default Login;
