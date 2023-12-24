import useTheme from "../../../style/useTheme"
import { Pressable, Text } from 'react-native'

const TextButton = ({ text, buttonStyle = undefined, textStyle = undefined, onClick = () => { } }) => {

    const { styles } = useTheme()

    return (
        <Pressable onPress={onClick} style={[buttonStyle, styles.textButton]}>
            <Text style={[styles.textButtonText, textStyle]}>{text}</Text>
        </Pressable>
    )
}

export default TextButton