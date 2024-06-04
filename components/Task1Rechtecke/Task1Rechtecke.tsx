import {Canvas, Rect} from "@shopify/react-native-skia"

export const Task1Rechtecke = () => {
  return (
    <Canvas style={{ flex: 1 }}>
      <Rect x={100} y={100} width={100} height={100} color={"red"} style={"fill"} strokeWidth={5}/>
      <Rect x={500} y={100} width={100} height={100} color={"green"} style={"fill"} strokeWidth={5}/>
    </Canvas>
  );
};

export default Task1Rechtecke;
