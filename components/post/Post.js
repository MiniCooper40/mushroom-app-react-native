import ImageBackground from "../containers/ImageBackground";
import PostContainer from "../containers/PostContainer";
import useTheme from "../../style/useTheme";
import { useCallback, useEffect, useState } from "react";
import { Image } from "expo-image";
import { Dimensions, Text } from "react-native";
import PostImage from "./PostImage";
import Vertical from "../containers/Vertical";
import PostImageContainer from "../containers/PostImageContainer";
import PostInteractionButtons from "../input/buttons/PostInteractionButtons";
import PostInfo from "./PostInfo";
import PostContent from "./PostContent";

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function Post({
    sources,
    caption = "This is a caption",
    interactions = { likes: 0, comments: 0, userLikes: false },
    onLike = () => { },
    onComment = () => { },
    onInsights = () => { },
    onViewProfile = () => { },
    onViewLocation = () => { }
}) {



    return (
        <PostContainer>
            <PostInfo
                profilePicture="https://i.pinimg.com/564x/50/5f/ae/505fae07cccb7098f7e82c82f857b13a.jpg"
                caption={caption}
                username="Robbie Thomlinson"
                time="1 hour"
                location="Victoria, British Columbia"
                onViewLocation={onViewLocation}
                onViewProfile={onViewProfile}
            />
            <PostContent
                sources={sources}
                onLike={onLike}
                onComment={onComment}
                onInsights={onInsights}
            />
        </PostContainer>
    )
}