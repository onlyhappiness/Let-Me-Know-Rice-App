import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import BottomButton from '../../components/BottomButton';
// import {useNavigation} from '@react-navigation/native';
import InputLabel from '../../components/InputLabel';

export default () => {
  // const navigation = useNavigation<any>();

  // 휴대폰 번호
  const [phone, setPhone] = useState('');

  // 인증번호
  const [code, setCode] = useState('');

  const handlePressNext = () => {
    // setUserInfo(true);
  };

  return (
    <DefaultLayout
      title="회원가입"
      extraChildren={
        <BottomButton active={true} title="다음" onPress={handlePressNext} />
      }>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <InputLabel
            labelText={`핸드폰`}
            placeholder={'핸드폰 번호를 입력하세요.'}
            value={phone}
            onChangeText={(t: string) => setPhone(t)}
            containerStyle={{marginBottom: 30}}
          />
          <InputLabel
            labelText={`인증번호`}
            placeholder={'인증번호를 입력하세요.'}
            value={code}
            onChangeText={(t: string) => setCode(t)}
            containerStyle={{marginBottom: 30}}
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
