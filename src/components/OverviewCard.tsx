import {
  View,
  Text,
  TouchableOpacity,
  Image,
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
      }}>
      <View style={styles.card}>
        <Image
          source={{
            uri: `https://www.pinterest.co.kr/pin/594123375864915576`,
          }}
          style={styles.image}
        />
        <Text style={styles.text}>{item?.name}</Text>
        <Text style={styles.subText}>{item?.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 30,
  },
  card: {
    width: '100%',
    borderRadius: 10,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: width - 20,
    height: 130,
    backgroundColor: 'gray',
  },
  text: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    fontSize: 16,
    fontWeight: '700',
  },
  subText: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    fontSize: 14,
    color: 'gray',
    // color: '#B1BDC5',
  },
});
