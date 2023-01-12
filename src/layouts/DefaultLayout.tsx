import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DefaultHeader from '../components/header/DefaultHeader';

interface IDefaultLayout {
  title: string | undefined;
  children: React.ReactNode;
}

export default ({title, children}: IDefaultLayout) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <View style={[styles.container, {paddingTop: top}]}>
        <DefaultHeader title={title} />
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});