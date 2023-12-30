import { TextInput } from "react-native"
import useTheme from "../../../style/useTheme"

const TextField = ({text, onTextChange, style, placeholder="", placeholderTextColor='black', onSubmitEditing=()=>{}}) => {

    const {styles} = useTheme()

    return <TextInput
        value={text}
        onChangeText={onTextChange}
        style={[styles.textField, style]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onSubmitEditing={onSubmitEditing}
    />
}

export default TextField