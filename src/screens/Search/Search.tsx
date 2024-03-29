import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from 'react-native-nmap';

export default () => {
  const P0 = {latitude: 37.564362, longitude: 126.977011};
  const P1 = {latitude: 37.565051, longitude: 126.978567};
  const P2 = {latitude: 37.565383, longitude: 126.976292};

  return (
    <NaverMapView
      style={{width: '100%', height: '100%'}}
      showsMyLocationButton={true}
      center={{...P0, zoom: 16}}
      onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
      onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
      onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}>
      <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')} />

      {/* <Marker
        coordinate={P1}
        pinColor="blue"
        onClick={() => console.warn('onClick! p1')}
      /> */}

      {/* TODO: pinColor="red" 는 ios에서 yellow로 나옴 */}
      {/* <Marker
        coordinate={P2}
        pinColor="red"
        onClick={() => console.warn('onClick! p2')}
      /> */}

      {/* TODO: P0, P1 거리 */}
      {/* <Path
        coordinates={[P0, P1]}
        onClick={() => console.warn('onClick! path')}
        width={10}
      /> */}

      {/* TODO: P1, P2 간의 선 */}
      {/* <Polyline
        coordinates={[P1, P2]}
        onClick={() => console.warn('onClick! polyline')}
      /> */}

      <Circle
        coordinate={P0}
        color={'rgba(255,0,0,0.3)'}
        radius={200}
        onClick={() => console.warn('onClick! circle')}
      />

      {/* TOOD: P0, P1, P2 사이 삼각형 생성 */}
      {/* <Polygon
        coordinates={[P0, P1, P2]}
        color={`rgba(0, 0, 0, 0.5)`}
        onClick={() => console.warn('onClick! polygon')}
      /> */}
    </NaverMapView>
  );
};
