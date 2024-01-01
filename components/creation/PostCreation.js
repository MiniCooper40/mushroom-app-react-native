import useTheme from "../../style/useTheme";
import {Text, View} from "react-native";
import RoundedButton from "../input/buttons/RoundedButton";
import {
    createPost,
    getCameraMedia,
    getLibraryMedia,
    postFromCameraMedia,
    postFromLibraryMedia
} from "../../network/Post";
import {useState} from "react";
import TextField from "../input/text/TextField";
import {FlatList} from "react-native-actions-sheet";
import {Image} from "expo-image";
import Loading from "../loading/Loading";
import FormLabel from "../typography/FormLabel";
import Carousel from "react-native-reanimated-carousel";

export default function PostCreation({onCreatePost = (resp)=>{}}) {
    const { colors, styles } = useTheme()

    const [media, setMedia] = useState([])
    const [caption, setCaption] = useState()
    const [isLoading, setIsLoading] = useState(false)

    console.log(media)

    function handleCreatePost() {
        setIsLoading(true)
        createPost(media, caption === undefined ? "" : caption)
            .then(resp => {
                // console.log('got created post', resp)
                setIsLoading(false)
                onCreatePost(resp)
            })
    }

    function handleCameraMedia() {
        getCameraMedia()
            .then(setMedia)
    }

    function handleLibraryMedia() {
        getLibraryMedia()
            .then(setMedia)
    }

    function getMediaThumbnails() {
        // return media.map(item => {
        //     return <Image
        //         source={item.uri}
        //         style={{height: 100, width: 100}}
        //         key={item.uri}
        //     />
        // })
        return <View>
            <Carousel
                height={200}
                width={200}
                data={media}
                renderItem={item => {
                    return <Image
                        contentFit="contain"
                        source={item.uri}
                        style={{height: 100, width: 100,}}
                        key={item.uri}
                    />
                }}
            />
        </View>
    }

    const textStyle = {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.onPrimary,
        alignItems: 'center'
    }

    const containerStyle = {alignItems: 'flex-start', width: '100%'}


    if(isLoading || !media) return <Loading />
    else return (
        <View style={{ padding: 8, gap: 20, flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: colors.primary }}>
            <View
                style={[containerStyle, styles.mediumGap]}
            >
                <Text style={textStyle}>Caption</Text>
                <TextField style={{backgroundColor: colors.primary}} text={caption} onTextChange={setCaption} placeholder="Enter caption..." />
            </View>
            <View
                style={[containerStyle, styles.mediumGap]}
            >
                <Text style={textStyle}>Select media</Text>
                <RoundedButton buttonStyle={{ backgroundColor: colors.secondary }} textStyle={{ color: colors.onSecondary }} title="From library" onClick={handleLibraryMedia} />
                <RoundedButton buttonStyle={{ backgroundColor: colors.secondary }} textStyle={{ color: colors.onSecondary }} title="From camera" onClick={handleCameraMedia} />
            </View>
            {media.length !== 0 &&
                <View
                    style={[containerStyle, styles.mediumGap]}
                >
                    <Text style={textStyle}>Selected media</Text>
                    <View
                        style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}
                        >
                        <Carousel
                            pagingEnabled={true}
                            loop={false}
                            height={200}
                            width={200}
                            data={media}
                            renderItem={({item}) => {
                                console.log('in render item w/', item)
                                return <Image
                                    contentFit="contain"
                                    source={item.uri}
                                    style={{height: 200, width: 200}}
                                    key={item.uri}
                                />
                            }}
                        />
                    </View>
                </View>
            }
            <RoundedButton title="Create post" textStyle={{color: colors.onSecondary}} buttonStyle={{ backgroundColor: colors.secondary }} disabled={media.length === 0} onClick={handleCreatePost} />
        </View>
    )
}