import { Image } from "expo-image";
import { Pressable } from "react-native";
import useSession from "../../auth/useSession";
import { useEffect, useState } from "react";

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


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
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
            />
        </Pressable>
    )
}