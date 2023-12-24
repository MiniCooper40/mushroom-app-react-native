import Carousel from 'react-native-reanimated-carousel';
import PostImage from './PostImage';
import { Dimensions } from 'react-native';

export default function PostImageCarousel({ sources, setIndex }) {

    return (
        <Carousel
            loop={false}
            width={Dimensions.get('window').width}
            height={500}
            autoPlay={false}
            data={sources}
            scrollAnimationDuration={500}
            onSnapToItem={(index) => setIndex(index)}
            renderItem={({ index }) => (
                <PostImage imageSource={sources[index]} />
            )}
            panGestureHandlerProps={{
                activeOffsetX: [-10, 10],
            }}
        />
    )
}