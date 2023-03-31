import {BackHandler} from 'react-native';
import React, {useEffect, useRef} from 'react';
import moment from 'moment';

import SimpleToast from 'react-native-simple-toast';

export default () => {
  const ref = useRef<any>();

  const exit_time = useRef(0);

  useEffect(() => {
    const onBackPress = () => {
      const canGoBack = ref.current?.canGoBack();
      if (!canGoBack && exit_time.current < moment().unix() - 3) {
        exit_time.current = moment().unix();
        SimpleToast.show('한번 더 클릭시 종료합니다.', SimpleToast.SHORT);
        return true;
      } else if (!canGoBack) {
        BackHandler.exitApp();
      }
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, []);
};
