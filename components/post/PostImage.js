import ImageBackground from "../containers/ImageBackground";
import PostContainer from "../containers/PostContainer";
import useTheme from "../../style/useTheme";
import { useCallback, useEffect, useState } from "react";
import { Image } from "expo-image";
import { Dimensions } from "react-native";
import PostImageContainer from "../containers/PostImageContainer";
import {BLUR_HASH} from "../../style/style";

export default function PostImage({ imageSource, setHeight=() => {} }) {

    const { styles } = useTheme()
    const [dimensions, setDimensions] = useState()

    let style = dimensions ? { width: dimensions.width, height: dimensions.height } : undefined

    return (
        <PostImageContainer>
            <Image
                style={[styles.postImage, style]}
                source={imageSource}
                placeholder={BLUR_HASH}
                contentFit="cover"
                transition={1000}
                onLoad={({ source }) => {
                    // console.log("")
                    const { width, height } = source
                    // console.log(`in onLoad, width=${width}, height=${height}`)
                    let screenWidth = Dimensions.get('window').width
                    let screenHeight = Dimensions.get('window').height
                    let aspectRatio = height / width

                    let adjustedWidth = screenWidth
                    let adjustedHeight = aspectRatio * screenWidth

                    // setHeight(adjustedHeight)

                    setDimensions({ width: adjustedWidth, height: adjustedHeight-2 })
                }}
            />
        </PostImageContainer>
    )
}