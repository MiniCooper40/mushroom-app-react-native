import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import TextButton from '../input/buttons/TextButton'
import useTheme from "../../style/useTheme";
import PostHeaderContainer from "../containers/PostHeaderContainer";
import PostCaption from "../typography/PostCaption";
import PostInfo from "./PostInfo";



export default function PostHeader({
    caption,
    profilePicture,
    username,
    location,
    time,
    onViewProfile = () => { },
    onViewLocation = () => { }
}) {

    const { styles } = useTheme()

    return (
        <PostHeaderContainer>
            <PostInfo
                username={username}
                location={location}
                time={time}
                onViewLocation={onViewLocation}
                onViewProfile={onViewProfile}
                profilePicture={profilePicture}
            />
            <PostCaption caption={caption} />
        </PostHeaderContainer>
    )
}