import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import DefaultInput from '../../components/DefaultInput';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

// logo
import Logo from '../../assets/logo.svg';
import {useLoginMutation} from '../../hooks/auth.query';

const Login = () => {
  const navigation = useNavigation<any>();

  // 로그인
  const [signname, setSignname] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useLoginMutation();

  const onHandleLogin = () => {
    // setUserInfo(true);
    const body = {
      signname,
      password,
    };

    loginMutation.mutate(body);
  };

  return (
    <AuthLayout>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          {/* <Text style={styles.logo}>밥줘</Text> */}
          <View style={styles.logoContainer}>
            <Logo width={140} height={100} style={styles.logo} />
            <Text style={styles.content}>밥 줘!</Text>
          </View>
          <DefaultInput
            placeholder={'아이디를 입력하세요.'}
            value={signname}
            onChangeText={(t: string) => setSignname(t.trim())}
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
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {},
  content: {
    paddingLeft: 0,
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
