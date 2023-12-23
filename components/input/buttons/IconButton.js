import { Pressable } from "react-native";
import Button from "./Button";
import useTheme from "../../../style/useTheme";
import { Text } from "react-native";

export default function IconButton({Icon, buttonStyle={}, onClick=()=>{}, title=undefined}) {

    const {styles, colors} = useTheme()

    return (
        <Pressable onPress={onClick} style={[styles.iconButton, buttonStyle]} >
            <Icon />
            {title && <Text style={{color: colors.primary, fontSize: 12}}>{title}</Text>}
        </Pressable>
    )
}