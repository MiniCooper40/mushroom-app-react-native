import ImageBackground from "../containers/ImageBackground";
import PostContainer from "../containers/PostContainer";
import useTheme from "../../style/useTheme";
import { useCallback, useEffect, useState } from "react";
import { Image } from "expo-image";
import { Dimensions } from "react-native";

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function PostImage({ imageSource }) {

    const { styles } = useTheme()
    const [dimensions, setDimensions ] = useState()

    let style = dimensions ? {width: dimensions.width, height: dimensions.height} : undefined

    console.log('style is', style)

    return (
        <Image
            style={[styles.postImage, style]}
            source={imageSource}
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
            onLoad={({ source }) => {
                console.log("")
                const { width, height } = source
                console.log(`in onLoad, width=${width}, height=${height}`)
                let screenWidth = Dimensions.get('window').width
                let screenHeight = Dimensions.get('window').height
                let aspectRatio = height / width

                let adjustedWidth = screenWidth
                let adjustedHeight = aspectRatio * screenWidth

                setDimensions({ width: adjustedWidth, height: adjustedHeight })
            }}
        />
    )
}