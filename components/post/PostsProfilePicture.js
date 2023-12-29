import { Image } from "expo-image";
import { Pressable } from "react-native";
import {BLUR_HASH} from "../../style/style";
import {useSession} from "../../auth/Auth";

export default function PostProfilePicture({
    profilePicture,
    onViewProfile = () => { },
    size=40
}) {

    const {token} = useSession()

    return (
        <Pressable onPress={onViewProfile}> 
            <Image
                style={{ height: size, width: size, resizeMode: 'cover', borderRadius: 20, overflow: 'hidden' }}
                source={{
                    uri: profilePicture,
                    headers: {
                        Authorization: token
                    }
                }}
                placeholder={BLUR_HASH}
                contentFit="cover"
                transition={1000}
            />
        </Pressable>
    )
}