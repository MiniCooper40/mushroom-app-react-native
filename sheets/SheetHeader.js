import { Text, View } from "react-native";
import IconButton from "../components/input/buttons/IconButton";
import useTheme from "../style/useTheme";

export default function SheetHeader({ Icon, onClickIcon, title }) {

    const {colors, styles} = useTheme()

    return (
        <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8 }}
        >
            <Text style={{ color: colors.onPrimary, fontWeight: 'bold' }}>
                {title}
            </Text>
            <IconButton onClick={onClickIcon}
                Icon={Icon}
            />
        </View>
    )
}