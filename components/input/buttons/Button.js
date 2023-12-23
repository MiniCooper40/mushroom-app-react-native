import { Pressable, Touchable } from "react-native"
import { Text } from "react-native"
import useTheme from "../../../style/useTheme"

const Button = ({title=undefined, onClick=()=>{}, buttonStyle={}, textStyle={}}) => {

    const {styles} = useTheme()

    return (
        <Pressable onPress={onClick} style={[styles.button, buttonStyle]} >
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </Pressable>
    )
}

export default Button