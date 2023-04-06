import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');

export default ({item}: any) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Store', {
          storeId: item?.id,
        });
      }}
      style={styles.container}>
      <View style={styles.card}>
        <View style={styles.image}>
          <View style={styles.circle}>
            <Text>이미지</Text>
          </View>
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
    height: '70%',
    backgroundColor: 'gray',
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
