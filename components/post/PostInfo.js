import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import TextButton from "../input/buttons/TextButton";
import useTheme from "../../style/useTheme";
import PostProfilePicture from "./PostsProfilePicture";
import PostMetaData from "./PostMetaData";
import PostInfoContainer from "../containers/PostInfoContainer";

export default function PostInfo({
    onViewProfile = () => { },
    onViewLocation = () => { },
    username = "username",
    time = "1 hour",
    location = "a place",
    profilePicture
}) {

    return (
        <PostInfoContainer>
            <PostProfilePicture
                profilePicture={profilePicture}
                onViewProfile={onViewProfile}
            />
            <PostMetaData
                time={time}
                location={location}
                onViewLocation={onViewLocation}
                username={username}
            />
        </PostInfoContainer>
    )
}