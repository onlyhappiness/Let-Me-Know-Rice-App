import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import BottomButton from '../../components/BottomButton';
import {useRecoilState} from 'recoil';
import {AuthState} from '../../recoil/AuthState';
import Button from '../../components/Button';

export default () => {
  const [userInfo, setUserInfo] = useRecoilState(AuthState);

  const onLogout = () => {
    setUserInfo(undefined);
  };

  return (
    <HomeLayout
      title="내 밥줘"
      extraChildren={
        <View style={{backgroundColor: '#ffffff'}}>
          <Button title="로그아웃" onPress={onLogout} />
        </View>
      }>
      <View style={styles.container}>
        <Text>Setting</Text>
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
