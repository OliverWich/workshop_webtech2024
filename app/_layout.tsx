import "react-native-reanimated";
import Constants from 'expo-constants';
import { Text, View, StyleSheet } from 'react-native';

import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <WithSkiaWeb
        getComponent={() => import('../components/Task3Regen/Task1Regen')}
        fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
