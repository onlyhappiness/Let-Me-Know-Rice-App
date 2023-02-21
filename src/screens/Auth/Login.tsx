import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import {useRecoilState} from 'recoil';
import {AuthState} from '../../recoil/AuthState';
import DefaultInput from '../../components/DefaultInput';
import {COLOR} from '../../theme/color';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation<any>();

  const [userInfo, setUserInfo] = useRecoilState(AuthState);

  // 로그인
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = () => {
    setUserInfo(true);
  };

  return (
    <AuthLayout>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          {/* <Text style={styles.logo}>밥줘</Text> */}
          <Text style={styles.content}>반갑습니다! 밥 줘 입니다.</Text>
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
          <Button
            title="로그인"
            containerStyle={{marginBottom: 30}}
            onPress={() => onHandleLogin()}
          />

          <View style={styles.authContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RegisterStepOne');
              }}>
              <Text>회원가입</Text>
            </TouchableOpacity>
          </View>
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
  },
  logo: {
    color: COLOR.main,
    fontSize: 18,
    letterSpacing: 5,
    marginBottom: 60,
    fontWeight: '800',
  },
  content: {
    color: '#9096a7',
    fontSize: 16,
    marginBottom: 60,
  },
  authContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
