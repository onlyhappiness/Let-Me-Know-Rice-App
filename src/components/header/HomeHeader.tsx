import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../theme/color';

interface Prop {
  title: string | undefined;
}

export default ({title}: Prop) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.center} />

      <View style={styles.right}>
        <View style={styles.iconContainer}>
          <FeatherIcon name="search" size={22} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Post');
            }}>
            <FeatherIcon name="bell" size={22} />
            <View style={styles.isNotice} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  left: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  center: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    // backgroundColor: 'gray',
  },
  iconContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  isNotice: {
    width: 11,
    height: 10,
    borderRadius: 100,
    backgroundColor: COLOR.main,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
