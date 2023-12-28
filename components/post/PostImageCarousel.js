import Carousel from 'react-native-reanimated-carousel';
import PostImage from './PostImage';
import { Dimensions } from 'react-native';
import { useState } from 'react';

export default function PostImageCarousel({ sources, setIndex }) {

    const [height, setHeight] = useState(500)

    return (
        <Carousel
            // style={{flexGrow: 1}}
            loop={false}
            width={Dimensions.get('window').width}
            height={400}
            autoPlay={false}
            data={sources}
            scrollAnimationDuration={500}
            onSnapToItem={(index) => setIndex(index)}
            renderItem={({ index }) => (
                <PostImage imageSource={sources[index]} setHeight={setHeight} />
            )}
            panGestureHandlerProps={{
                activeOffsetX: [-10, 10],
            }}
        />
    )
}