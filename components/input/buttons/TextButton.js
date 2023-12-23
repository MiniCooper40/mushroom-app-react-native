import useTheme from "../../../style/useTheme"
import {Pressable, Text} from 'react-native'

const TextButton = ({text, buttonStyle, textStyle}) => {

    const {styles} = useTheme()

    return (
        <Pressable style={[buttonStyle, styles.textButton]}>
            <Text style={[textStyle, styles.textButtonText]}>{text}</Text>
        </Pressable>
    )
}

export default TextButton