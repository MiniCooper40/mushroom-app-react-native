import { View } from "react-native"
import PostProfilePicture from "../post/PostsProfilePicture"
import LabeledText from "../typography/LabeledText"
import RoundedButton from '../../components/input/buttons/RoundedButton'
import useTheme from "../../style/useTheme"

export default function AccountHeader({account={}, action="Follow", onAction=() => {}}) {

    const { colors, styles } = useTheme()

    const {
        profilePicture,
        username,
        followers,
        bio
    } = account

    return (
        <View style={[styles.mediumGap, { paddingBottom: 20, padding: 10 }]}>
            <View style={{ flex: 1, }}>
                <View style={[styles.horizontalFlex, styles.mediumGap]}>
                    <PostProfilePicture size={40} profilePicture={profilePicture} />
                    <View style={{ flex: 1 }}>
                        <LabeledText label="Username:" text={username} />
                        <LabeledText label="Followers:" text={followers} />
                        <LabeledText label="Bio:" text={bio} />
                    </View>
                </View>
            </View>
            <RoundedButton onClick={onAction} title={action} textStyle={{ color: colors.onSecondary }} buttonStyle={{ backgroundColor: colors.secondary }} />
        </View>
    )

}