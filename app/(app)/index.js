import React from 'react'
import { Text } from 'react-native'
import PostContainer from '../../components/containers/PostContainer'
import image from '../../assets/loginBackground.jpg'
import Post from '../../components/post/Post'
import PostFeedContainer from '../../components/containers/PostFeedContainer'

export default function Page() {

    return (
        <PostFeedContainer>
            <Post
                caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
                sources={[
                    "https://www.wikidoc.org/images/c/c2/Amanita_muscaria_%28fly_agaric%29.JPG",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/A_White_Mushrooms_in_Hong_Kong_%28cropped%29.jpg/1280px-A_White_Mushrooms_in_Hong_Kong_%28cropped%29.jpg"
                ]}
                onComment={() => console.log("opened comments")}
                onInsights={() => console.log("opened insights")}
                onLike={() => console.log("liked post")}
                onViewProfile={() => console.log('viewing profile')}
            />
            <Post
                caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
                sources={[
                    "https://www.wikidoc.org/images/c/c2/Amanita_muscaria_%28fly_agaric%29.JPG",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/A_White_Mushrooms_in_Hong_Kong_%28cropped%29.jpg/1280px-A_White_Mushrooms_in_Hong_Kong_%28cropped%29.jpg"
                ]}
                onComment={() => console.log("opened comments")}
                onInsights={() => console.log("opened insights")}
                onLike={() => console.log("liked post")}
                onViewProfile={() => console.log('viewing profile')}
            />
            <Post
                caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
                sources={[
                    "https://www.wikidoc.org/images/c/c2/Amanita_muscaria_%28fly_agaric%29.JPG",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/A_White_Mushrooms_in_Hong_Kong_%28cropped%29.jpg/1280px-A_White_Mushrooms_in_Hong_Kong_%28cropped%29.jpg"
                ]}
                onComment={() => console.log("opened comments")}
                onInsights={() => console.log("opened insights")}
                onLike={() => console.log("liked post")}
                onViewProfile={() => console.log('viewing profile')}
            />
        </PostFeedContainer>
    )
}