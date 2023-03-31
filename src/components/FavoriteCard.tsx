import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

export default () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.card}>
          <Text style={styles.image}>이미지</Text>

          <View style={styles.textContainer}>
            <Text>가게이름</Text>
            <Text>가게주소</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ffffff',
    backgroundColor: 'gray',
    borderRadius: 10,
    width: width - 20,
    height: height / 7,
    marginTop: 20,
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 10,
  },
  image: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  textContainer: {
    width: '70%',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
