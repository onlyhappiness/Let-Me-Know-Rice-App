import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation, useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {login, loginInfo, register} from '../api/apis/auth';
import {me, setToken} from '../redux/auth';

// 회원가입
export const useRegisterMutation = () => {
  return useMutation(register, {
    onSuccess(res) {
      console.log('회원가입 성공', res);
    },
    onError(err) {
      console.log('회원가입 에러', err);
      // errorcode
      const {data}: any = (err as AxiosError<any>).response;
      console.log('error: ', data);
    },
  });
};

// 로그인
export const useLoginMutation = () => {
  const dispatch = useDispatch<any>();

  return useMutation(login, {
    onSuccess(res) {
      const token = res?.access_token;
      AsyncStorage.setItem('token', token);
      setToken(token);
      dispatch(me());
    },
    onError(err) {
      const {data}: any = (err as AxiosError).response;

      console.log('로그인 에러', data);
      Alert.alert('아이디 또는 비밀번호를 확인해주세요.');
    },
  });
};

// 로그인 정보 조히
export const useLoginInfo = () => {
  // const token = await AsyncStorage.getItem('token');

  return useQuery(['loginInfo'], () => {
    return loginInfo();
  });
};
