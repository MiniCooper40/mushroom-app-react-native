import { Pressable, Touchable } from "react-native"
import { Text } from "react-native"
import useTheme from "../../../style/useTheme"

const Button = ({title=undefined, onClick=()=>{}, buttonStyle={}, textStyle={}, disabled=false}) => {

    const {styles} = useTheme()

    return (
        <Pressable disabled={disabled} onPress={onClick} style={[styles.button, buttonStyle]} >
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </Pressable>
    )
}

export default Button