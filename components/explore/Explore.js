
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
import {router} from 'expo-router'

const url = 'http://192.168.1.101:8080/'

function postsToColumn(posts) {
    return posts.map(({source, id}) => {
        const loc = url+source
        // console.log('retrieving image from ', loc)
        return <ExploreImage onClick={() => router.replace(`/post/${id}`)} key={id} image={loc} />
    }) 
}


const columnStyle = {
    flex: 1
}

const exploreImage = {

}


export default function Explore({ posts, Header=() => {} }) {

    // console.log('posts', posts)

    const leftPosts = posts.slice(0, Math.ceil(posts.length/2))
    const rightPosts = posts.slice(Math.ceil(posts.length/2), posts.length)

    const {styles, colors} = useTheme()
    

    return (
        <ScrollView style={[styles.postFeedContainer]} contentContainerStyle={{ flexGrow: 1 }}>
            {Header()}
            <View style={{ flexDirection: 'row', backgroundColor: colors.primary, flex: 1 }}>
                <View style={columnStyle}>
                    {postsToColumn(leftPosts)}
                </View>
                <View style={columnStyle}>
                    {postsToColumn(rightPosts)}
                </View>
            </View>
        </ScrollView>
    )
}