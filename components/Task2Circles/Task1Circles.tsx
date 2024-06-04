import {Canvas, Circle, Group} from "@shopify/react-native-skia"

export const Task1Circles = () => {
  return (
    <Canvas style={{ flex: 1 }}>
        <Group blendMode={"multiply"}>
            <Circle cx={100} cy={100} r={100} color={"red"} style={"fill"} strokeWidth={5}/>
            <Circle cx={200} cy={100} r={100} color={"green"} style={"fill"} strokeWidth={5}/>
        </Group>
    </Canvas>
  );
};

export default Task1Circles;
