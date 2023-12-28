import React from 'react'
import { Button, Text } from 'react-native'
import PostContainer from '../../components/containers/PostContainer'
import image from '../../assets/loginBackground.jpg'
import Post from '../../components/post/Post'
import PostFeedContainer from '../../components/containers/PostFeedContainer'
import { SheetManager } from 'react-native-actions-sheet'
import { router, useLocalSearchParams, Link } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth'
import { firebaseSignOut } from '../../auth/Auth'
import useSession from '../../auth/useSession'
import { useExploreFeed } from '../../network/Post'
import PostFeed from '../../components/post/PostFeed'
import Loading from '../../components/loading/Loading'

export default function Page() {
    const posts = useExploreFeed()

    function onComment(id) {
        SheetManager.show('comments-sheet', {
            payload: { postId: id, sheetId: 'comments-sheet' }
        })
    }

    function signOut() {
        firebaseSignOut()
        setAuth(undefined)
    }

    console.log('posts in home', posts)

    if(posts) return (
        <PostFeed posts={posts} />
    )
    else return <Loading />

}
