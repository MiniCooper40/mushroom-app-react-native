import React from 'react'
import { useExploreFeed } from '../../network/Post'
import PostFeed from '../../components/post/PostFeed'
import Loading from '../../components/loading/Loading'

export default function Page() {
    const posts = useExploreFeed()

    if(posts) return (
        <PostFeed posts={posts} />
    )
    else return <Loading />

}
