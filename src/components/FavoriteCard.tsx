import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Logo from '../assets/logo.svg';

const {width} = Dimensions.get('screen');

export default ({item}: any) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('StoreDetail', {
          storeId: item?.id,
        });
      }}
      style={styles.container}>
      <View style={styles.card}>
        <View style={styles.image}>
          {item?.Store?.image ? (
            <Image
              source={{uri: `${item?.Store?.image}`}}
              style={{width: 100, height: 100, borderRadius: 50}}
            />
          ) : (
            <View style={styles.circle}>
              <Logo width={100} />
            </View>
          )}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>{item?.Store?.name}</Text>
          <Text style={styles.address}>{item?.Store?.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: width - 20,
    height: 130,
    borderRadius: 20,
  },
  card: {
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  image: {
    width: width / 3,
    height: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '80%',
    backgroundColor: '#d6d6d6',
    borderRadius: 50,
  },
  textContainer: {
    padding: 20,
    borderRadius: 10,
    flex: 1,
    height: 130,
  },
  name: {
    fontSize: 16,
    fontWeight: '800',
    paddingBottom: 10,
  },
  address: {
    color: '#808080',
  },
});
