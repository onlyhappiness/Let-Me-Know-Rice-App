import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import {useNavigation} from '@react-navigation/native';
import BottomButton from '../../components/BottomButton';
import InputLabel from '../../components/InputLabel';
import InputPassword from '../../components/InputPassword';

export default () => {
  const navigation = useNavigation<any>();

  const [username, setUsername] = useState('');
  const [signname, setSignname] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [comparePassword, setComparePassword] = useState<boolean>(false);

  // 비밀번호 검증
  const passwordValidation = useMemo(() => {
    if (password.length === 0) return;
    const regex = /^[\da-zA-Z$!@#$%^&*?&]{8,15}$/;
    return regex.test(password);
  }, [password]);

  useEffect(() => {
    if (password.length === 0 && rePassword.length === 0) {
      setComparePassword(true);
    } else if (password === rePassword) {
      setComparePassword(true);
    } else {
      setComparePassword(false);
    }
  }, [password, rePassword]);

  const active =
    username && signname && password && rePassword && comparePassword;

  return (
    <DefaultLayout
      title="회원가입"
      extraChildren={
        <BottomButton
          active={!active}
          title="확인"
          onPress={() => navigation.navigate('RegisterStepTwo')}
        />
      }>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <InputLabel
            labelText={`이름`}
            placeholder={'이름을 입력하세요.'}
            value={username}
            onChangeText={(t: string) => setUsername(t)}
            containerStyle={{marginBottom: 30}}
          />
          <InputLabel
            labelText={`아이디`}
            placeholder={'아이디를 입력하세요.'}
            value={signname}
            onChangeText={(t: string) => setSignname(t)}
            containerStyle={{marginBottom: 30}}
          />

          <InputPassword
            labelText={'비밀번호'}
            placeholder="비밀번호 입력"
            containerStyle={{marginBottom: 15}}
            secureTextEntry
            textContentType="oneTimeCode"
            value={password}
            onChangeText={(t: any) => setPassword(t.trim())}
            validationCheck={passwordValidation}
            bottomText="영(소, 대)문자, 특수문자만 입력이 가능하고, 8~15글자 이내에 입력해 주세요"
          />

          <InputPassword
            placeholder="비밀번호 재확인"
            containerStyle={{marginBottom: 50}}
            secureTextEntry
            textContentType="oneTimeCode"
            value={rePassword}
            onChangeText={(t: any) => setRePassword(t.trim())}
            validationCheck={comparePassword}
            bottomText={'비밀번호가 일치하지 않습니다.'}
          />
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
});
