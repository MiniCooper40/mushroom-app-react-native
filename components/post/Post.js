import ImageBackground from "../containers/ImageBackground";
import PostContainer from "../containers/PostContainer";
import useTheme from "../../style/useTheme";
import { useCallback, useEffect, useState } from "react";
import { Image } from "expo-image";
import { Dimensions, Text } from "react-native";
import PostImage from "./PostImage";
import Vertical from "../containers/Vertical";
import PostImageContainer from "../containers/PostContentContainer";
import PostInteractionButtons from "../input/buttons/PostInteractionButtons";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import CommentModal from "../../sheets/CommentsSheet";
import Button from "../input/buttons/Button";
import { SheetManager } from 'react-native-actions-sheet'
import {likePost, useInteractions} from "../../network/Post";

/*
{
    media: [
        {
            source: url,
            insights: {
                suggestions: {
                        image,
                        probability,
                        name
                }
            }
        }
    ]
}
*/

export default function Post({
    media,
    profilePicture = "https://i.pinimg.com/564x/50/5f/ae/505fae07cccb7098f7e82c82f857b13a.jpg",
    caption = "This is a caption",
    time = "an hour",
    location = "a place",
    username = "Username",
    interactions = { likes: 0, comments: 0, userLikes: false },
    onLike = () => { },
    onComment = () => { },
    onViewProfile = () => { },
    onViewLocation = () => { },
    id=1
}) {

    const [index, setIndex] = useState(0)
    const {currentInteractions, handleLikeAction, incrementComments, decrementComments} = useInteractions(id, interactions)

    function viewInsight(insights) {
        SheetManager.show('insights-sheet', {
            payload: { postId: id, sheetId: 'insights-sheet', insights, index: index }
        })
    }

    // console.log({currentInteractions})


    const currentMediaInsights = media[index].insights

    return (
        <PostContainer>
            <PostHeader
                profilePicture={profilePicture}
                caption={caption}
                username={username}
                time={time}
                location={location}
                onViewLocation={onViewLocation}
                onViewProfile={onViewProfile}
            />
            <PostContent
                sources={media.map(m => m.source)}
                onLike={handleLikeAction}
                onComment={onComment}
                onInsights={currentMediaInsights !== undefined ? () => viewInsight(currentMediaInsights) : undefined}
                index={index}
                setIndex={setIndex}
                interactions={currentInteractions}
            />
        </PostContainer>
    )
}