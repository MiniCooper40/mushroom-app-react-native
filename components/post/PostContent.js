import { Image } from "expo-image";
import { useEffect } from "react";
import { Dimensions, View } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import PostImageContainer from "../containers/PostImageContainer";
import PostInteractionButtons from "../input/buttons/PostInteractionButtons";
import PostImage from "./PostImage";

export default function PostContent({
    onLike = () => { },
    onComment = () => { },
    onInsights = () => { },
    sources
}) {

    return (
        <PostImageContainer>
            <Carousel
                loop={false}
                width={Dimensions.get('window').width}
                height={500}
                autoPlay={false}
                data={sources}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <PostImage imageSource={sources[index]} />
                    </View>
                )}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
            />
            <PostInteractionButtons
                onLike={onLike}
                onComment={onComment}
                onInsights={onInsights}
            />
        </PostImageContainer>
    )
}