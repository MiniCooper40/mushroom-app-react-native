import { Text, View } from "react-native";
import { router, useLocalSearchParams, Link } from 'expo-router';
import PostProfilePicture from "../../../components/post/PostsProfilePicture";
import LabeledText from '../../../components/typography/LabeledText'
import PostFeedContainer from "../../../components/containers/PostFeedContainer";
import Explore from "../../../components/explore/Explore";
import useTheme from "../../../style/useTheme";
import AccountHeader from "../../../components/account/AccountHeader";
import useProfileFeed from "../../../components/account/useProfileFeed";
import { useOtherAccount } from "../../../network/User";
import Loading from "../../../components/loading/Loading";

export default function Page() {

    const params = useLocalSearchParams()
    const { account: userId } = params

    const {posts} = useProfileFeed(userId)
    const account = useOtherAccount(userId)
    
    function getPosts() {
        console.log({posts})
        return posts.map(post => {
            return {
                source: post.media[0].source,
                id: post['post_id']
            }
        })
    }

    console.log('in account, posts are',  posts)

    if(posts) return (
        <Explore
            posts={getPosts()}
            Header={() => {
                return <AccountHeader account={account} action="Follow" />
            }}
        />
    )
    else return <Loading />
}