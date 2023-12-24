import { Image } from "expo-image";
import { Pressable } from "react-native";

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


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
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
            />
        </Pressable>
    )
}