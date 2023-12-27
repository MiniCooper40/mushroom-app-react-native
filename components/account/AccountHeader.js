import { View } from "react-native"
import PostProfilePicture from "../post/PostsProfilePicture"
import LabeledText from "../typography/LabeledText"
import RoundedButton from '../../components/input/buttons/RoundedButton'
import useTheme from "../../style/useTheme"
import useSession from "../../auth/useSession"
import { getAuth } from "firebase/auth"
import { BASE_URL } from "../../network/Network"

export default function AccountHeader({account={}, action="Follow", onAction=() => {}}) {

    const url = 'http://192.168.1.101:8080/'

    const accountDetails = {
        profilePicture: url + account.profilePicture,//"https://i.pinimg.com/564x/50/5f/ae/505fae07cccb7098f7e82c82f857b13a.jpg",
        username: account.username,
        followers: account.followers,
        bio: account.bio
    }

    console.log("in account header, account is", account)

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
                        <LabeledText label="Bio:" text={accountDetails.bio} />
                    </View>
                </View>
            </View>
            <RoundedButton onClick={onAction} title={action} textStyle={{ color: colors.onSecondary }} buttonStyle={{ backgroundColor: colors.secondary }} />
        </View>
    )

}