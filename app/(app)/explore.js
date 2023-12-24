import { Dimensions, Text, View } from 'react-native'
import useTheme from '../../style/useTheme'
import { Image } from 'expo-image';
import ExploreImage from '../../components/explore/ExploreImage';
import { ScrollView } from 'react-native-gesture-handler';
import Explore from '../../components/explore/Explore';


export default function Page() {

    const { colors, styles } = useTheme()

    const columnStyle = {
        flex: 1,
    }

    const exploreImage = {

    }

    const image1 = "https://i.natgeofe.com/n/586b922d-7eba-44d8-b74c-f932ff1cfbb5/naturepl_01339486_2x3.jpg"
    const image2 = "https://www.treehugger.com/thmb/5gvna5sA4OhNEdNLvk4GjL9RVc8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amethyst-deceiver-mushrooms-1329276825-643a3613450e4c9289e60e870e5a0da7.jpg"
    const image3 = "https://mdpiblog.wordpress.sciforum.net/wp-content/uploads/sites/4/2023/02/death-cap-MDPI-Blog.jpg"

    const images = [image1, image2, image3]

    const posts = []
    for(let i = 0; i < 20; i++) posts.push({
        image: images[ Math.floor(Math.random() * 3)],
        id: Math.random()
    })

    return (
        <Explore posts={posts} />
    )
}