import { ActivityIndicator, Image, View } from "react-native";
import logo from '../../assets/logo1.png'
import useTheme from "../../style/useTheme";

export default function Loading() {

    const {colors, styles} = useTheme()

    return (
        <View style={[styles.center, {backgroundColor: colors.primary}]}>
            {/* <Image source={logo} style={{ width: 200, resizeMode: 'contain'}} /> */}
            <ActivityIndicator size="large" color={colors.onPrimary} />
        </View>
    )
}