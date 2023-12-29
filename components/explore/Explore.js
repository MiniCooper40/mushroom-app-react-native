
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
import {RESOURCE_URL} from "../../network/Network";

function postsToColumn(posts) {
    return posts.map(({source, id}) => {
        return <ExploreImage
            onClick={() => router.replace(`/post/${id}`)}
            key={id}
            image={RESOURCE_URL+source}
        />
    })
}


const columnStyle = {
    flex: 1
}


export default function Explore({ posts, Header=() => {} }) {

    const leftPosts = posts.slice(0, Math.ceil(posts.length/2))
    const rightPosts = posts.slice(Math.ceil(posts.length/2), posts.length)

    const {styles, colors} = useTheme()
    

    return (
        <ScrollView style={styles.postFeedContainer} contentContainerStyle={{ flexGrow: 1 }}>
            {Header()}
            <View style={[styles.horizontalFlex, {backgroundColor: colors.primary, flex: 1 }]}>
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