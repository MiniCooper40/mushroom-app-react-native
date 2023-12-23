import {View} from 'react-native'
import useTheme from "../../style/useTheme"

const Vertical = ({children, style}) => {

    const {styles} = useTheme()

    return (
        <View style={[styles.vertical, style]}>
            {children}
        </View>
    )
}

export default Vertical