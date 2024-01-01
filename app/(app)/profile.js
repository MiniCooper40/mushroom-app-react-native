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
import IconButton from "../../components/input/buttons/IconButton";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import {FontAwesome5} from "@expo/vector-icons";
import {SheetManager} from "react-native-actions-sheet";

export default function Page() {

    const {account} = useSession()
    const { id } = account
    const {posts, addPost} = useProfileFeed(id)
    const {colors} = useTheme()

    function getPosts() {
        return posts.map(post => {
            return {
                source: post.media[0].source,
                id: post['post_id']
            }
        })
    }

    function handlePostCreation() {
        SheetManager.show('create-post-sheet', {
            payload: {sheetId: 'create-post-sheet', onCreatePost: addPost}
        })
    }

    if(posts) return (
        <View style={{flex: 1}}>
            <Explore posts={getPosts()} Header={() => <AccountHeader account={account} action="Edit profile" />} />
            <View >
                <IconButton
                    buttonStyle={{position: 'absolute', bottom: 20, right: 20, backgroundColor: colors.secondary, padding: 20, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}
                    Icon={() => <FontAwesome5 name="camera" size={40} color={colors.onSecondary} />}
                    onClick={handlePostCreation}
                />
            </View>
        </View>
    )

    else return <Loading />
}