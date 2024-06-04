import React, { useMemo } from "react";
import { Blur, Canvas, Circle, ColorMatrix, Group, LinearGradient, Paint, Rect, vec } from "@shopify/react-native-skia";
import Droplet from "./Droplet";


const Waterdrop = () => {

  const layer = useMemo(() => {
    return (
      <Paint>
        <Blur blur={10} />
        
        <ColorMatrix  matrix={
          //R G B A, BIAS
          //prettier-ignore
          [1, 0, 0, 0, 0, 
            //prettier-ignore
           0, 1, 0, 0, 0,
           //prettier-ignore
           0, 0, 1, 0, 0, 
           //prettier-ignore
           0, 0, 0, 10, -5,]

           //https://fecolormatrix.com/
          } />
            
      </Paint>
      );
  },[]);

  return (
    <Canvas style={{flex:1}}>
      <Group layer={layer} strokeWidth={15}>
      <LinearGradient start={vec(1000,0)} end={vec(1000,5000)} colors={["skyblue", "blue"]}/>
        {Array.from({ length: 50 }).map((_, i) => {
            return (
              <Group key={i}>
                <Droplet/>
              </Group>
            );
          }
          )}
        
        <Rect x={0} y={900} width={10000} height={10000} key={"water"}/>
      </Group>
    </Canvas>
  );
};

export default Waterdrop;