import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {me, setToken} from '../redux/auth';
import {useDispatch} from 'react-redux';

export default () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('token');

      if (!token) return;
      setToken(token);
      dispatch(me());
    })();
  }, [dispatch]);
};
