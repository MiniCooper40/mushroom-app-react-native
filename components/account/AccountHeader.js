import { View } from "react-native"
import PostProfilePicture from "../post/PostsProfilePicture"
import LabeledText from "../typography/LabeledText"
import RoundedButton from '../../components/input/buttons/RoundedButton'
import useTheme from "../../style/useTheme"

export default function AccountHeader({ account }) {

    const accountDetails = {
        profilePicture: "https://i.pinimg.com/564x/50/5f/ae/505fae07cccb7098f7e82c82f857b13a.jpg",
        username: "Username",
        followers: 123,
        location: "A place, A country",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'"
    }

    const { colors } = useTheme()

    return (
        <View style={{ paddingBottom: 20, padding: 10, gap: 10 }}>
            <View style={{ flex: 1, }}>
                {/* Profile header */}
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <PostProfilePicture size={40} profilePicture={accountDetails.profilePicture} />
                    <View style={{ flex: 1 }}>
                        <LabeledText label="Username:" text={accountDetails.username} />
                        <LabeledText label="Followers:" text={accountDetails.followers} />
                        <LabeledText label="Location:" text={accountDetails.location} />
                        <LabeledText label="Bio:" text={accountDetails.bio} />
                    </View>
                </View>
            </View>
            <RoundedButton title="Follow" textStyle={{ color: colors.onSecondary }} buttonStyle={{ backgroundColor: colors.secondary }} />
        </View>
    )
}