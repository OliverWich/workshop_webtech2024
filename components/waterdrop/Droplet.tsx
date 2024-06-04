import React, { useEffect, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { Circle } from "@shopify/react-native-skia";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});


const Droplet = () => {
  
  const height = useSharedValue(Math.random()*100);

  useEffect(() => {
    height.value = withRepeat(
      withTiming(
        1150,
        { duration: (Math.random()+0.2)*4850, easing: Easing.bounce }
      ),
      -1,
      false
    );
  }, []);

  return (
    <Circle cx={Math.random()*1500} cy={height} r={15} />
  );
};

export default Droplet;