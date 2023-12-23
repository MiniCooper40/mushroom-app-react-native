import { View } from "react-native";
import IconButton from "./IconButton";

export default function HeaderButtons({ openSettings, openNotifications, settingsIcon, notificationsIcon }) {

    return (
        <View style={{ display: 'flex', flexDirection: 'row', gap: 12, paddingRight: 24 }}>
            <IconButton Icon={notificationsIcon} />
            <IconButton Icon={settingsIcon} />
        </View>
    )
}