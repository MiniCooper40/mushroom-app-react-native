import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import ActionSheet, { FlatList, SheetManager } from 'react-native-actions-sheet'
import PostContentContainer from "../containers/PostContentContainer";
import PostInteractionButtons from "../input/buttons/PostInteractionButtons";
import PostImage from "./PostImage";
import PostImageCarousel from "./PostImageCarousel";

export default function PostContent({
    onLike = () => { },
    onComment = () => { },
    onInsights = undefined,
    sources,
    setIndex
}) {

    

    return (
        <PostContentContainer>
            <PostImageCarousel sources={sources} setIndex={setIndex} />
            <PostInteractionButtons
                onLike={onLike}
                onComment={onComment}
                onInsights={onInsights}
            />
        </PostContentContainer>
    )
}