import { Text, View } from "react-native";
import { router, useLocalSearchParams, Link } from 'expo-router';
import Post from "../../../components/post/Post";
import { SheetManager } from 'react-native-actions-sheet'
import PostFeedContainer from "../../../components/containers/PostFeedContainer";

export default function Page() {

    const params = useLocalSearchParams()
    const { post } = params

    function onComment(id) {
        SheetManager.show('comments-sheet', {
            payload: { postId: id, sheetId: 'comments-sheet' }
        })
    }

    const suggestion1 = {
        image: "https://mushroom-id.ams3.cdn.digitaloceanspaces.com/similar_images/1/788/84aed0149c1f6a7cac50ba07a7f6c00aec1ce.jpg",
        name: "A mushroom",
        probability: "44.3%"
    }

    const suggestion2 = {
        image: "https://mushroom-id.ams3.cdn.digitaloceanspaces.com/similar_images/1/fda/db8a661308371864a767acb79f6c77c0afefa.jpeg",
        name: "A mushroom",
        probability: "44.3%"
    }

    const suggestions1 = [suggestion1, suggestion1, suggestion2]
    const suggestions2 = [suggestion2, suggestion2, suggestion1]




    const media = [
        {
            source: "https://www.wikidoc.org/images/c/c2/Amanita_muscaria_%28fly_agaric%29.JPG",
            insights: {
                suggestions: suggestions1
            }
        },
        {
            source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/A_White_Mushrooms_in_Hong_Kong_%28cropped%29.jpg/1280px-A_White_Mushrooms_in_Hong_Kong_%28cropped%29.jpg",
            insights: undefined
        }
    ]

    return (
        <PostFeedContainer>
            <Post
                caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
                media={media}
                onComment={() => onComment(1)}
                onLike={() => console.log("liked post")}
                onViewProfile={() => console.log('viewing profile')}
            />
        </PostFeedContainer>
    )
}