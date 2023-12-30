import { View } from "react-native";
import TextField from "./TextField";
import IconButton from "../buttons/IconButton";
import useTheme from "../../../style/useTheme";

export default function IconTextField({
    Icon,
    text,
    onTextChange,
    placeholder = "",
    onSubmit = () => { },
    iconStyle={},
    textFieldStyle={} 
}) {

    const {colors, styles} = useTheme()

    return (
        <View style={[styles.horizontalFlex, { alignItems: 'center', justifyContent: 'space-between', paddingRight: 10 }]}>
            <TextField onSubmitEditing={onSubmit} placeholder={placeholder} text={text} onTextChange={onTextChange} style={{ backgroundColor: colors.primary, fontSize: 15 }} />
            <IconButton Icon={Icon} onClick={onSubmit} />
        </View>
    )
}