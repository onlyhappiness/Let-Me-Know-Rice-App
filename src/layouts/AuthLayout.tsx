import {View, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AuthHeader from '../components/header/AuthHeader';

interface IAuthLayout {
  title: string | undefined;
  children: ReactNode;
}

export default ({title, children}: IAuthLayout) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <View style={[styles.container, {paddingTop: top}]}>
        <AuthHeader title={title} />
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
