import {View, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AuthHeader from '../components/header/AuthHeader';
import {COLOR} from '../theme/color';

interface IAuthLayout {
  title?: string | undefined;
  children: ReactNode;
  extraChildren?: ReactNode;
}

export default ({title, children, extraChildren}: IAuthLayout) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={[styles.container, {paddingTop: top}]}>
        <AuthHeader title={title} />
        {children}
      </View>
      {extraChildren}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
