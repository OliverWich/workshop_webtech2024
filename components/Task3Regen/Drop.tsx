import React, { useEffect } from "react";
import {
  Easing,
  useSharedValue, withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated"

import {Circle} from "@shopify/react-native-skia"

const Drop = () => {

  const height = useSharedValue(-10);

  useEffect(() => {
    height.value = withRepeat(
        withDelay(
            Math.random() * 4000,
            withTiming(
                screen.height - 150,
                { duration: (Math.random() * 100) + 3000, easing: Easing.bounce }
            ),
        ),
        -1
    );
  }, [height]);

  return (
        <Circle
            cx={Math.floor(Math.random() * screen.width) } cy={ height } r={10}
            style={"fill"} strokeWidth={5}
        />
  );
};

export default Drop;
