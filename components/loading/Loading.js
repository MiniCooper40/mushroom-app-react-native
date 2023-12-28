import { ActivityIndicator, Image, View } from "react-native";
import logo from '../../assets/logo1.png'
import useTheme from "../../style/useTheme";

export default function Loading() {

    const {colors} = useTheme()

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: colors.primary}}>
            {/* <Image source={logo} style={{ width: 200, resizeMode: 'contain'}} /> */}
            <ActivityIndicator size="large" color={colors.onPrimary} />
        </View>
    )
}