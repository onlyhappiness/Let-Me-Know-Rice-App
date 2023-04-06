import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {clearPrincipal} from '../../redux/auth';
import {useDispatch} from 'react-redux';

export default () => {
  const dispatch = useDispatch();

  const onLogout = async () => {
    AsyncStorage.clear();
    dispatch(clearPrincipal());
  };

  const options = [
    {
      name: '로그아웃',
      onPress: () => onLogout(),
    },
    {
      name: '탈퇴하기',
    },
  ];

  return (
    <HomeLayout title="내 밥">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Text style={{marginRight: 10}}>유저 아이콘</Text>
            <Text>bread님</Text>
          </View>

          {options.map(v => {
            return (
              <TouchableOpacity
                key={v.name}
                style={styles.button}
                onPress={v.onPress}>
                <Text>{v.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profile: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
});
