import { Text, View } from "react-native"
import useTheme from "../../style/useTheme"

export default function LabeledText({ label, text, textStyle={}, containerStyle={} }) {

    const { styles, colors } = useTheme()

    const fontStyle = {
        fontSize: 14,
        color: colors.onPrimary
    }

    return (
        <View style={[{ flexDirection: 'row', gap: 8 }, containerStyle]}>
            <Text style={[fontStyle, { fontWeight: 'bold' }]}>{label}</Text>
            <Text style={fontStyle}>{text}</Text>
        </View>
    )
}