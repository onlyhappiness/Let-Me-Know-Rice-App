import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import NaverMapView, {Marker} from 'react-native-nmap';

const {height} = Dimensions.get('screen');

export default ({storeDetail}: any) => {
  const P0 = {latitude: 37.564362, longitude: 126.977011};

  const {bottom} = useSafeAreaInsets();

  return (
    <View style={{flex: 1, padding: 15, paddingBottom: bottom + 30}}>
      <View style={styles.map}>
        <NaverMapView
          style={{width: '100%', height: '100%'}}
          showsMyLocationButton={true}
          center={{...P0, zoom: 16}}
          onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
          onCameraChange={e =>
            console.warn('onCameraChange', JSON.stringify(e))
          }
          onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}>
          <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')} />
        </NaverMapView>
      </View>
      <Text style={styles.address}>{storeDetail?.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: height / 5,
    backgroundColor: 'gray',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  address: {
    fontSize: 14,
  },
});
