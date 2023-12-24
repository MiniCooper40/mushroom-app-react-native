
/*
    posts: [
        {
            image,
            id
        }
    ]
*/

import { ScrollView } from "react-native-gesture-handler"
import useTheme from "../../style/useTheme"
import { View } from "react-native"
import ExploreImage from "./ExploreImage"

function postsToColumn(posts) {
    return posts.map(({image, id}) => {
        return <ExploreImage key={id} image={image} />
    }) 
}


const columnStyle = {
    flex: 1
}

const exploreImage = {

}


export default function Explore({ posts, Header=() => {} }) {

    console.log('posts', posts)

    const leftPosts = posts.slice(0, Math.ceil(posts.length/2))
    const rightPosts = posts.slice(Math.ceil(posts.length/2), posts.length)

    const {styles, colors} = useTheme()
    

    return (
        <ScrollView style={[styles.postFeedContainer]} contentContainerStyle={{ flexGrow: 1 }}>
            {Header()}
            <View style={{ flexDirection: 'row', backgroundColor: colors.primary, flex: 1 }}>
                <View style={columnStyle}>
                    {/* <ExploreImage image={image1} />
                    <ExploreImage image={image3} />
                    <ExploreImage image={image2} />
                    <ExploreImage image={image1} />
                    <ExploreImage image={image3} />
                    <ExploreImage image={image1} />
                    <ExploreImage image={image2} />
                    <ExploreImage image={image3} />
                    <ExploreImage image={image2} /> */}
                    {postsToColumn(leftPosts)}
                </View>
                <View style={columnStyle}>
                    {/* <ExploreImage image={image3} />
                    <ExploreImage image={image1} />
                    <ExploreImage image={image2} />
                    <ExploreImage image={image3} />
                    <ExploreImage image={image2} />
                    <ExploreImage image={image1} />
                    <ExploreImage image={image3} />
                    <ExploreImage image={image2} />
                    <ExploreImage image={image1} /> */}
                    {postsToColumn(rightPosts)}
                </View>
            </View>
        </ScrollView>
    )
}