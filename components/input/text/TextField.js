import { TextInput } from "react-native"
import useTheme from "../../../style/useTheme"

const TextField = ({text, onTextChange, style, placeholder="", placeholderTextColor='black'}) => {

    const {styles} = useTheme()

    return <TextInput value={text} onTextChange={onTextChange} style={[styles.textField, style]} placeholder={placeholder} placeholderTextColor={placeholderTextColor} />
}

export default TextField