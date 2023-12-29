import { View } from "react-native";
import IconButton from "./IconButton";
import useTheme from "../../../style/useTheme";

export default function HeaderButtons({ openSettings, openNotifications, settingsIcon, notificationsIcon }) {

    const {styles} = useTheme()

    return (
        <View style={[styles.horizontalFlex, styles.mediumGap, {paddingRight: 24 }]}>
            <IconButton Icon={notificationsIcon} />
            <IconButton Icon={settingsIcon} />
        </View>
    )
}