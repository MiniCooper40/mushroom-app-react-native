import { Text, View } from "react-native";
import { router, useLocalSearchParams, Link } from 'expo-router';
import PostProfilePicture from "../../components/post/PostsProfilePicture";
import LabeledText from '../../components/typography/LabeledText'
import PostFeedContainer from "../../components/containers/PostFeedContainer";
import Explore from "../../components/explore/Explore";
import useTheme from "../../style/useTheme";
import AccountHeader from "../../components/account/AccountHeader";
import { useEffect, useState } from "react";
import { getUserPosts } from "../../network/Post";
import useProfileFeed from "../../components/account/useProfileFeed";
import Loading from "../../components/loading/Loading";
import {useSession} from "../../auth/Auth";

export default function Page() {

    const {account} = useSession()
    const { id } = account
    const {posts} = useProfileFeed(id)

    function getPosts() {
        return posts.map(post => {
            return {
                source: post.media[0].source,
                id: post['post_id']
            }
        })
    }

    if(posts) return (
        <View>
            <Explore posts={getPosts()} Header={() => <AccountHeader account={account} action="Edit profile" />} />
        </View>
    )

    else return <Loading />
}