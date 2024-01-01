import { Image } from "expo-image";
import { Pressable } from "react-native";
import {BLUR_HASH} from "../../style/style";
import {useSession} from "../../auth/Auth";

export default function PostProfilePicture({
    profilePicture,
    onViewProfile = () => { },
    size=40
}) {

    return (
        <Pressable onPress={onViewProfile}> 
            <Image
                style={{ height: size, width: size, resizeMode: 'cover', borderRadius: 20, overflow: 'hidden' }}
                source={profilePicture}
                placeholder={BLUR_HASH}
                contentFit="cover"
                transition={1000}
            />
        </Pressable>
    )
}