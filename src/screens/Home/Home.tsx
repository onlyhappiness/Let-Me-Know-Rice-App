import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useCallback} from 'react';
import notifee from '@notifee/react-native';
import HomeLayout from '../../layouts/HomeLayout';

export default () => {
  // TODO: notifee
  const onDisplayNotification = useCallback(() => {
    (async () => {
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });

      await notifee.displayNotification({
        title: '밥줘',
        body: '밥줘 알림',
        android: {
          channelId,
        },
      });
    })();
  }, []);

  return (
    <HomeLayout title="주소">
      <View style={styles.container}>
        <Text>Home</Text>

        <Button
          title="Display Notification"
          onPress={() => {
            onDisplayNotification();
          }}
        />
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
