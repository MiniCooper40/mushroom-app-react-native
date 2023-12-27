import { Text, View } from "react-native";
import { router, useLocalSearchParams, Link } from 'expo-router';
import PostProfilePicture from "../../components/post/PostsProfilePicture";
import LabeledText from '../../components/typography/LabeledText'
import PostFeedContainer from "../../components/containers/PostFeedContainer";
import Explore from "../../components/explore/Explore";
import useTheme from "../../style/useTheme";
import AccountHeader from "../../components/account/AccountHeader";
import { useEffect, useState } from "react";
import useSession from "../../auth/useSession";
import { getUserPosts } from "../../network/Post";

export default function Page() {

    const image1 = "https://i.natgeofe.com/n/586b922d-7eba-44d8-b74c-f932ff1cfbb5/naturepl_01339486_2x3.jpg"
    const image2 = "https://www.treehugger.com/thmb/5gvna5sA4OhNEdNLvk4GjL9RVc8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amethyst-deceiver-mushrooms-1329276825-643a3613450e4c9289e60e870e5a0da7.jpg"
    const image3 = "https://mdpiblog.wordpress.sciforum.net/wp-content/uploads/sites/4/2023/02/death-cap-MDPI-Blog.jpg"

    const images = [image1, image2, image3]

    const { token } = useSession()

    // const posts = []
    // for(let i = 0; i < 20; i++) posts.push({
    //     image: images[ Math.floor(Math.random() * 3)],
    //     id: Math.random()
    // })

    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (token) getUserPosts()
            .then(posts => posts.json())
            .then(body => {
                const {posts} = body
                console.log('got posts', posts)
                setPosts(posts)
            })
            .catch(err => console.log('error getting user posts', err))
    }, [token])

    function getPosts() {
        return posts.map(post => {
            return {
                source: post.media[0].source,
                id: post['post_id']
            }
        })
    }

    return (
        <View>
            <Explore posts={getPosts()} Header={() => <AccountHeader />} />
        </View>
    )
}