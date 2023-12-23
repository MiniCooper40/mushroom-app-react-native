import useTheme from '../../style/useTheme'
import {View, ImageBackground as ReactNativeImageBackground} from 'react-native'

const ImageBackground = ({ children=undefined, source, resizeMode="cover", imageStyle=undefined, containerStyle=undefined }) => {
    
    const {styles} = useTheme()
    
    return (
        <View style={styles.backgroundImageContainer}>
            <ReactNativeImageBackground source={source} resizeMode={resizeMode} style={styles.backgroundImage}>
                {children}
            </ReactNativeImageBackground>
        </View>
    )
}

export default ImageBackground