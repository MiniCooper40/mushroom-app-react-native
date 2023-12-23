import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function PostInfo({
    caption,
    profilePicture,
    username,
    location,
    time,
    onViewProfile = () => { },
    onViewLocation = () => { }
}) {

    const gap = 8

    return (
        <View style={{ padding: 10, gap: gap }}>
            <View style={{ flexDirection: 'row', gap: gap }}>
                <Pressable onPress={onViewProfile}>
                    <Image
                        style={{ height: 40, width: 40, resizeMode: 'cover', borderRadius: 20, overflow: 'hidden' }}
                        source={profilePicture}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                    />
                </Pressable>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>{username}</Text>
                    <Text style={{ opacity: 0.5 }}>{`${time} ago, ${location}`}</Text>
                </View>
            </View>
            <Text>{caption}</Text>
        </View>
    )
}