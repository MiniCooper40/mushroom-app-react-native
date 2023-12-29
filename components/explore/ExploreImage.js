import { Image } from "expo-image";
import useTheme from "../../style/useTheme";
import { Dimensions, Pressable, Touchable } from "react-native";
import { useState } from "react";
import {BLUR_HASH} from "../../style/style";
export default function ExploreImage({ image, onClick = () => { } }) {


    const { colors, styles } = useTheme()
    const [dimensions, setDimensions] = useState()

    return (
        <Pressable onPress={onClick}>
            <Image
                style={styles.exploreImage}
                source={image}
                placeholder={BLUR_HASH}
                contentFit='cover'
                transition={1000}
                contentPosition='center'
                onLoad={({ source }) => {
                    // console.log("")
                    const { width, height } = source
                    // console.log(`in onLoad, width=${width}, height=${height}`)
                    let screenWidth = Dimensions.get('screen').width / 2 - 1
                    let screenHeight = Dimensions.get('screen').height
                    let aspectRatio = height / width

                    let adjustedWidth = screenWidth
                    let adjustedHeight = aspectRatio * screenWidth

                    setDimensions({ width: adjustedWidth, height: adjustedHeight - 10 })
                }}
            />
        </Pressable>
    )
}