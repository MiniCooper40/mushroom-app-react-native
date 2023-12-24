import { Image } from "expo-image";
import useTheme from "../../style/useTheme";
import { Dimensions } from "react-native";
import { useState } from "react";

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function ExploreImage({ image }) {

    
    const { colors, styles } = useTheme()
    const [dimensions, setDimensions] = useState()
    let style = dimensions ? { height: dimensions.height } : undefined
    // let style = dimensions ? { aspectRatio: dimensions.height/dimensions.width } : undefined

    console.log('image style', style)

    return (
        <Image
            style={[styles.exploreImage]}
            source={image}
            placeholder={blurhash}
            contentFit='cover'
            transition={1000}
            contentPosition='center'
            onLoad={({ source }) => {
                // console.log("")
                const { width, height } = source
                // console.log(`in onLoad, width=${width}, height=${height}`)
                let screenWidth = Dimensions.get('screen').width/2 - 1
                let screenHeight = Dimensions.get('screen').height
                let aspectRatio = height / width

                let adjustedWidth = screenWidth
                let adjustedHeight = aspectRatio * screenWidth

                setDimensions({ width: adjustedWidth, height: adjustedHeight-10 })
            }}
        />
    )
}