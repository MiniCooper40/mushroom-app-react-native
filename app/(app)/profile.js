import { Text, View } from "react-native";
import { router, useLocalSearchParams, Link } from 'expo-router';
import PostProfilePicture from "../../components/post/PostsProfilePicture";
import LabeledText from '../../components/typography/LabeledText'
import PostFeedContainer from "../../components/containers/PostFeedContainer";
import Explore from "../../components/explore/Explore";
import useTheme from "../../style/useTheme";
import AccountHeader from "../../components/account/AccountHeader";

export default function Page() {

    const params = useLocalSearchParams()
    const { account } = params

    const image1 = "https://i.natgeofe.com/n/586b922d-7eba-44d8-b74c-f932ff1cfbb5/naturepl_01339486_2x3.jpg"
    const image2 = "https://www.treehugger.com/thmb/5gvna5sA4OhNEdNLvk4GjL9RVc8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amethyst-deceiver-mushrooms-1329276825-643a3613450e4c9289e60e870e5a0da7.jpg"
    const image3 = "https://mdpiblog.wordpress.sciforum.net/wp-content/uploads/sites/4/2023/02/death-cap-MDPI-Blog.jpg"

    const images = [image1, image2, image3]

    const posts = []
    for(let i = 0; i < 20; i++) posts.push({
        image: images[ Math.floor(Math.random() * 3)],
        id: Math.random()
    })

    const accountDetails = {
        profilePicture: "https://i.pinimg.com/564x/50/5f/ae/505fae07cccb7098f7e82c82f857b13a.jpg",
        username: "Username",
        followers: 123,
        location: "A place, A country",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'"
    }

    return (
        <Explore
            posts={posts}
            Header={() => {
                return <AccountHeader />
            }}
        />
    )
}