import {Blur, Canvas, ColorMatrix, Group, LinearGradient, Paint, Rect} from "@shopify/react-native-skia"
import Drop from "@/components/Task3Regen/Drop"
import React, {useMemo} from "react"

export const Task1Regen = () => {

    const drops = 400;

    const circles = new Array(drops).fill(0).map((_, index) => (
        <Drop key={index} />
    ))

    const layer = useMemo(() => {
        return (
            <Paint>
                <Blur blur={5} />

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
        <Canvas style={{flex: 1}}>
            <Group layer={layer}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: screen.width, y: screen.height}} colors={['skyblue', 'blue']} />
                <Group key={"drops"} blendMode={"multiply"}>
                    {circles}
                </Group>
                <Rect x={0} y={screen.height - 200} color={'blue'} height={200} width={screen.width} />
            </Group>
        </Canvas>
    )
}

export default Task1Regen
